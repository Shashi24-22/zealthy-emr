import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';
import Link from 'next/link';
import LogoutButton from '@/components/LogoutButton';

export default async function PortalLayout({ children }) {
  const session = await getSession();
  if (!session) redirect('/');

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link href="/portal" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.5l7.5-7.5 7.5 7.5M4.5 19.5l7.5-7.5 7.5 7.5" />
                  </svg>
                </div>
                <span className="font-bold text-gray-900">Zealthy</span>
              </Link>
              <div className="flex items-center gap-1">
                <Link href="/portal" className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors">
                  Overview
                </Link>
                <Link href="/portal/appointments" className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors">
                  Appointments
                </Link>
                <Link href="/portal/medications" className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors">
                  Medications
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-700 font-bold text-xs">
                    {session.name.split(' ').map(n => n[0]).join('').slice(0,2)}
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-700 hidden sm:block">{session.name}</span>
              </div>
              <LogoutButton />
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-4xl mx-auto px-4 py-8">{children}</main>
    </div>
  );
}