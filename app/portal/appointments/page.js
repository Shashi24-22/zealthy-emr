import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { getOccurrences, next3Months } from '@/lib/schedule';
import { format } from 'date-fns';

export default async function AppointmentsPage() {
  const session = await getSession();
  if (!session) redirect('/');

  const user = await db.user.findUnique({
    where: { id: session.userId },
    include: { appointments: true },
  });

  const { from, to } = next3Months();

  const all = [];
  for (const appt of user.appointments) {
    const dates = getOccurrences(appt.datetime, appt.repeat, appt.endDate, from, to);
    dates.forEach(d => all.push({ date: d, provider: appt.provider, repeat: appt.repeat }));
  }
  all.sort((a, b) => a.date - b.date);

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold text-gray-900">All Appointments — next 3 months</h1>
      {all.length === 0
        ? <p className="text-gray-400">No upcoming appointments.</p>
        : all.map((a, i) => (
          <div key={i} className="card px-5 py-4 flex items-center gap-4">
            <div className="text-center w-12">
              <div className="text-lg font-bold text-blue-700">{format(a.date, 'd')}</div>
              <div className="text-xs text-blue-400">{format(a.date, 'MMM')}</div>
            </div>
            <div>
              <div className="font-medium text-gray-900">{a.provider}</div>
              <div className="text-sm text-gray-400">{format(a.date, 'EEEE · h:mm a')}</div>
            </div>
            {a.repeat !== 'none' && (
              <span className="ml-auto text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full capitalize">
                {a.repeat}
              </span>
            )}
          </div>
        ))
      }
    </div>
  );
}