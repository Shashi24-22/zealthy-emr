import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { getOccurrences, next7Days } from '@/lib/schedule';
import { format } from 'date-fns';
import Link from 'next/link';

export default async function PortalPage() {
  const session = await getSession();
  if (!session) redirect('/');

  const user = await db.user.findUnique({
    where: { id: session.userId },
    include: { appointments: true, prescriptions: true },
  });

  const { from, to } = next7Days();

  const upcomingAppts = [];
  for (const appt of user.appointments) {
    const dates = getOccurrences(appt.datetime, appt.repeat, appt.endDate, from, to);
    dates.forEach(d => upcomingAppts.push({ date: d, provider: appt.provider }));
  }
  upcomingAppts.sort((a, b) => a.date - b.date);

  const upcomingRefills = [];
  for (const rx of user.prescriptions) {
    const dates = getOccurrences(rx.refillOn, rx.refillSchedule, null, from, to);
    dates.forEach(d => upcomingRefills.push({ date: d, medication: rx.medication, dosage: rx.dosage }));
  }
  upcomingRefills.sort((a, b) => a.date - b.date);

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-bold text-gray-900">Hello, {user.name.split(' ')[0]} 👋</h1>

      <div className="grid grid-cols-2 gap-4">
        <div className="card p-5">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-semibold text-gray-800">Appointments this week</h2>
            <Link href="/portal/appointments" className="text-xs text-blue-600 hover:underline">See all</Link>
          </div>
          {upcomingAppts.length === 0
            ? <p className="text-sm text-gray-400">None this week.</p>
            : upcomingAppts.map((a, i) => (
              <div key={i} className="py-2 border-b last:border-0 text-sm">
                <div className="font-medium">{a.provider}</div>
                <div className="text-gray-400">{format(a.date, 'EEE MMM d · h:mm a')}</div>
              </div>
            ))
          }
        </div>

        <div className="card p-5">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-semibold text-gray-800">Refills this week</h2>
            <Link href="/portal/medications" className="text-xs text-blue-600 hover:underline">See all</Link>
          </div>
          {upcomingRefills.length === 0
            ? <p className="text-sm text-gray-400">None this week.</p>
            : upcomingRefills.map((r, i) => (
              <div key={i} className="py-2 border-b last:border-0 text-sm">
                <div className="font-medium">{r.medication} {r.dosage}</div>
                <div className="text-gray-400">Refill on {format(r.date, 'MMM d')}</div>
              </div>
            ))
          }
        </div>
      </div>

      <div className="card p-5">
        <h2 className="font-semibold text-gray-800 mb-3">Your information</h2>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div><span className="text-gray-400">Name: </span>{user.name}</div>
          <div><span className="text-gray-400">Email: </span>{user.email}</div>
          {user.phone       && <div><span className="text-gray-400">Phone: </span>{user.phone}</div>}
          {user.dateOfBirth && <div><span className="text-gray-400">DOB: </span>{user.dateOfBirth}</div>}
        </div>
      </div>
    </div>
  );
}