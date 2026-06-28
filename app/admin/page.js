import { db } from '@/lib/db';
import Link from 'next/link';
import { format } from 'date-fns';

export default async function AdminPage() {
  const patients = await db.user.findMany({
    include: { appointments: true, prescriptions: true },
    orderBy: { createdAt: 'asc' },
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">Patients ({patients.length})</h1>
        <Link href="/admin/patients/new" className="btn-blue">+ New patient</Link>
      </div>

      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left px-4 py-3 text-gray-500 font-medium">Name</th>
              <th className="text-left px-4 py-3 text-gray-500 font-medium">Email</th>
              <th className="text-center px-4 py-3 text-gray-500 font-medium">Appts</th>
              <th className="text-center px-4 py-3 text-gray-500 font-medium">Rx</th>
              <th className="text-left px-4 py-3 text-gray-500 font-medium">Joined</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {patients.map(p => (
              <tr key={p.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">{p.name}</td>
                <td className="px-4 py-3 text-gray-500">{p.email}</td>
                <td className="px-4 py-3 text-center">{p.appointments.length}</td>
                <td className="px-4 py-3 text-center">{p.prescriptions.length}</td>
                <td className="px-4 py-3 text-gray-400">{format(p.createdAt, 'MMM d, yyyy')}</td>
                <td className="px-4 py-3 text-right">
                  <Link href={`/admin/patients/${p.id}`} className="btn-gray text-xs">View →</Link>
                </td>
              </tr>
            ))}
            {patients.length === 0 && (
              <tr><td colSpan={6} className="px-4 py-8 text-center text-gray-400">
                No patients yet. <Link href="/admin/patients/new" className="text-blue-600 hover:underline">Add one.</Link>
              </td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}