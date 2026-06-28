import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';
import Link from 'next/link';
import LogoutButton from '@/components/LogoutButton';

export default async function PortalLayout({ children }) {
  const session = await getSession();
  if (!session) redirect('/');

  return (
    <div>
      <nav className="bg-white border-b px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="font-semibold text-blue-700">Zealthy</span>
          <Link href="/portal" className="text-sm text-gray-600 hover:text-gray-900">Overview</Link>
          <Link href="/portal/appointments" className="text-sm text-gray-600 hover:text-gray-900">Appointments</Link>
          <Link href="/portal/medications" className="text-sm text-gray-600 hover:text-gray-900">Medications</Link>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <span>{session.name}</span>
          <LogoutButton />
        </div>
      </nav>
      <main className="max-w-3xl mx-auto px-4 py-8">{children}</main>
    </div>
  );
}