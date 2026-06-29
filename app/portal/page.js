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
  if (!user) redirect('/');

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
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Hello, {user.name.split(' ')[0]} 👋</h1>
          <p className="text-gray-400 text-sm mt-0.5">{format(new Date(), 'EEEE, MMMM d, yyyy')}</p>
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-3 gap-4">
        <div className="card p-5">
          <div className="text-3xl font-bold text-blue-600">{upcomingAppts.length}</div>
          <div className="text-sm text-gray-500 mt-1">Appointments this week</div>
        </div>
        <div className="card p-5">
          <div className="text-3xl font-bold text-purple-600">{upcomingRefills.length}</div>
          <div className="text-sm text-gray-500 mt-1">Refills this week</div>
        </div>
        <div className="card p-5">
          <div className="text-3xl font-bold text-teal-600">{user.prescriptions.length}</div>
          <div className="text-sm text-gray-500 mt-1">Active medications</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Appointments */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-900">Appointments this week</h2>
            <Link href="/portal/appointments" className="text-xs text-blue-600 hover:text-blue-700 font-medium">
              See all →
            </Link>
          </div>
          {upcomingAppts.length === 0 ? (
            <div className="text-center py-6">
              <div className="text-3xl mb-2">📅</div>
              <p className="text-sm text-gray-400">No appointments this week</p>
            </div>
          ) : (
            <div className="space-y-3">
              {upcomingAppts.map((a, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex flex-col items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm leading-none">{format(a.date, 'd')}</span>
                    <span className="text-blue-200 text-xs leading-none">{format(a.date, 'MMM')}</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">{a.provider}</div>
                    <div className="text-xs text-gray-500">{format(a.date, 'EEEE · h:mm a')}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Refills */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-900">Refills this week</h2>
            <Link href="/portal/medications" className="text-xs text-blue-600 hover:text-blue-700 font-medium">
              See all →
            </Link>
          </div>
          {upcomingRefills.length === 0 ? (
            <div className="text-center py-6">
              <div className="text-3xl mb-2">💊</div>
              <p className="text-sm text-gray-400">No refills due this week</p>
            </div>
          ) : (
            <div className="space-y-3">
              {upcomingRefills.map((r, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex flex-col items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm leading-none">{format(r.date, 'd')}</span>
                    <span className="text-purple-200 text-xs leading-none">{format(r.date, 'MMM')}</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">{r.medication}</div>
                    <div className="text-xs text-gray-500">{r.dosage}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Patient info */}
      <div className="card p-6">
        <h2 className="font-semibold text-gray-900 mb-4">Your information</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-gray-400">Full name</div>
              <div className="text-sm font-medium text-gray-900">{user.name}</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-gray-400">Email</div>
              <div className="text-sm font-medium text-gray-900">{user.email}</div>
            </div>
          </div>
          {user.phone && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-400">Phone</div>
                <div className="text-sm font-medium text-gray-900">{user.phone}</div>
              </div>
            </div>
          )}
          {user.dateOfBirth && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-400">Date of birth</div>
                <div className="text-sm font-medium text-gray-900">{user.dateOfBirth}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}