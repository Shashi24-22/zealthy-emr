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

  const { from, to } = next3Months();

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold text-gray-900">Medications & Refills</h1>
      {user.prescriptions.length === 0
        ? <p className="text-gray-400">No active prescriptions.</p>
        : user.prescriptions.map(rx => {
          const refills = getOccurrences(rx.refillOn, rx.refillSchedule, null, from, to);
          return (
            <div key={rx.id} className="card p-5">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="font-semibold text-gray-900">{rx.medication}</h2>
                <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">{rx.dosage}</span>
                <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">Qty {rx.quantity}</span>
                <span className="text-xs bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full capitalize">{rx.refillSchedule}</span>
              </div>
              <div className="text-xs text-gray-400 mb-3">Upcoming refills (next 3 months)</div>
              <div className="flex flex-wrap gap-2">
                {refills.length === 0
                  ? <span className="text-sm text-gray-400">No refills in this period.</span>
                  : refills.map((d, i) => (
                    <span key={i} className="text-xs bg-teal-50 text-teal-700 px-3 py-1.5 rounded-lg">
                      {format(d, 'MMM d')}
                    </span>
                  ))
                }
              </div>
            </div>
          );
        })
      }
    </div>
  );
}