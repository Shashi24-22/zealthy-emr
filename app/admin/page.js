export const dynamic = 'force-dynamic';

import { db } from '@/lib/db';
import Link from 'next/link';
import { format } from 'date-fns';

export default async function AdminPage() {
  const patients = await db.user.findMany({
    include: { appointments: true, prescriptions: true },
    orderBy: { createdAt: 'asc' },
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Patients</h1>
          <p className="text-gray-400 text-sm mt-0.5">{patients.length} registered patients</p>
        </div>
        <Link href="/admin/patients/new" className="btn-blue">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New patient
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="card p-5">
          <div className="text-3xl font-bold text-blue-600">{patients.length}</div>
          <div className="text-sm text-gray-500 mt-1">Total patients</div>
        </div>
        <div className="card p-5">
          <div className="text-3xl font-bold text-green-600">
            {patients.reduce((sum, p) => sum + p.appointments.length, 0)}
          </div>
          <div className="text-sm text-gray-500 mt-1">Total appointments</div>
        </div>
        <div className="card p-5">
          <div className="text-3xl font-bold text-purple-600">
            {patients.reduce((sum, p) => sum + p.prescriptions.length, 0)}
          </div>
          <div className="text-sm text-gray-500 mt-1">Total prescriptions</div>
        </div>
      </div>

      {/* Table */}
      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wide">Patient</th>
              <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wide">Email</th>
              <th className="text-center px-5 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wide">Appts</th>
              <th className="text-center px-5 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wide">Rx</th>
              <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wide">Joined</th>
              <th className="px-5 py-3.5"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {patients.map(p => (
              <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-700 font-bold text-xs">
                        {p.name.split(' ').map(n => n[0]).join('').slice(0,2)}
                      </span>
                    </div>
                    <span className="font-semibold text-gray-900">{p.name}</span>
                  </div>
                </td>
                <td className="px-5 py-4 text-gray-500">{p.email}</td>
                <td className="px-5 py-4 text-center">
                  <span className="badge-blue">{p.appointments.length}</span>
                </td>
                <td className="px-5 py-4 text-center">
                  <span className="badge-purple">{p.prescriptions.length}</span>
                </td>
                <td className="px-5 py-4 text-gray-400 text-xs">{format(p.createdAt, 'MMM d, yyyy')}</td>
                <td className="px-5 py-4 text-right">
                  <Link href={`/admin/patients/${p.id}`} className="btn-gray text-xs">
                    View record →
                  </Link>
                </td>
              </tr>
            ))}
            {patients.length === 0 && (
              <tr>
                <td colSpan={6} className="px-5 py-12 text-center">
                  <div className="text-3xl mb-2">👤</div>
                  <div className="font-medium text-gray-500">No patients yet</div>
                  <Link href="/admin/patients/new" className="text-blue-600 hover:underline text-sm mt-1 inline-block">
                    Add your first patient →
                  </Link>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}