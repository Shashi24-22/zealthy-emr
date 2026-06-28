import Link from 'next/link';

export default function AdminLayout({ children }) {
  return (
    <div>
      <nav className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin" className="font-semibold text-white">Zealthy EMR</Link>
          <span className="text-xs bg-slate-600 text-slate-300 px-2 py-0.5 rounded">ADMIN</span>
        </div>
        <Link href="/" className="text-slate-300 hover:text-white text-sm">→ Patient Portal</Link>
      </nav>
      <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
    </div>
  );
}