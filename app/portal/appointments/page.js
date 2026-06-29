export const dynamic = 'force-dynamic';

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
  if (!user) redirect('/');

  const { from, to } = next3Months();

  const all = [];
  for (const appt of user.appointments) {
    const dates = getOccurrences(appt.datetime, appt.repeat, appt.endDate, from, to);
    dates.forEach(d => all.push({ date: d, provider: appt.provider, repeat: appt.repeat }));
  }
  all.sort((a, b) => a.date - b.date);

  // Group by month
  const byMonth = {};
  for (const a of all) {
    const key = format(a.date, 'MMMM yyyy');
    if (!byMonth[key]) byMonth[key] = [];
    byMonth[key].push(a);
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Appointments</h1>
          <p className="text-gray-400 text-sm mt-0.5">Your schedule for the next 3 months</p>
        </div>
        <span className="badge-blue">{all.length} total</span>
      </div>

      {all.length === 0 ? (
        <div className="card p-12 text-center">
          <div className="text-4xl mb-3">📅</div>
          <div className="font-medium text-gray-700">No upcoming appointments</div>
          <div className="text-sm text-gray-400 mt-1">Your schedule is clear for the next 3 months</div>
        </div>
      ) : (
        Object.entries(byMonth).map(([month, appts]) => (
          <div key={month}>
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 px-1">{month}</h2>
            <div className="card divide-y divide-gray-50">
              {appts.map((a, i) => (
                <div key={i} className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex flex-col items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-base leading-none">{format(a.date, 'd')}</span>
                    <span className="text-blue-200 text-xs leading-none">{format(a.date, 'EEE')}</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{a.provider}</div>
                    <div className="text-sm text-gray-400">{format(a.date, 'h:mm a · MMMM d, yyyy')}</div>
                  </div>
                  {a.repeat !== 'none' && (
                    <span className="badge-blue capitalize">{a.repeat}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}