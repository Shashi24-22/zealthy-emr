import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { getOccurrences, next3Months } from '@/lib/schedule';
import { format } from 'date-fns';

export default async function MedicationsPage() {
  const session = await getSession();
  if (!session) redirect('/');

  const user = await db.user.findUnique({
    where: { id: session.userId },
    include: { prescriptions: true },
  });
  if (!user) redirect('/');

  const { from, to } = next3Months();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Medications</h1>
          <p className="text-gray-400 text-sm mt-0.5">Your prescriptions and upcoming refills</p>
        </div>
        <span className="badge-purple">{user.prescriptions.length} active</span>
      </div>

      {user.prescriptions.length === 0 ? (
        <div className="card p-12 text-center">
          <div className="text-4xl mb-3">💊</div>
          <div className="font-medium text-gray-700">No active prescriptions</div>
          <div className="text-sm text-gray-400 mt-1">Contact your provider to get started</div>
        </div>
      ) : (
        user.prescriptions.map(rx => {
          const refills = getOccurrences(rx.refillOn, rx.refillSchedule, null, from, to);
          return (
            <div key={rx.id} className="card p-6">
              {/* Medication header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-bold text-gray-900 text-lg">{rx.medication}</h2>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="badge-purple">{rx.dosage}</span>
                      <span className="badge-gray">Qty {rx.quantity}</span>
                      <span className="badge-teal capitalize">{rx.refillSchedule}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Refills */}
              <div className="border-t border-gray-50 pt-4">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">
                  Upcoming refills — next 3 months ({refills.length})
                </div>
                {refills.length === 0 ? (
                  <p className="text-sm text-gray-400">No refills scheduled in this period.</p>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {refills.map((d, i) => (
                      <div key={i} className="flex items-center gap-1.5 bg-teal-50 text-teal-700 text-xs px-3 py-2 rounded-lg font-medium border border-teal-100">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {format(d, 'MMM d, yyyy')}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}