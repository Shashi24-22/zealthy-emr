import Link from 'next/link';

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-slate-900 sticky top-0 z-10 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-6">
              <Link href="/admin" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.5l7.5-7.5 7.5 7.5M4.5 19.5l7.5-7.5 7.5 7.5" />
                  </svg>
                </div>
                <span className="font-bold text-white">Zealthy EMR</span>
              </Link>
              <span className="text-xs bg-blue-500 text-white px-2.5 py-1 rounded-full font-medium">ADMIN</span>
            </div>
            <Link href="/" className="flex items-center gap-1.5 text-slate-400 hover:text-white text-sm transition-colors">
              Patient Portal
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
        </div>
      </nav>
      <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
    </div>
  );
}