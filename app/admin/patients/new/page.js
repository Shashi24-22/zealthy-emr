'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function NewPatientPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', password: '', phone: '', dateOfBirth: '' });
  const [error, setError]   = useState('');
  const [saving, setSaving] = useState(false);

  function set(k, v) { setForm(f => ({ ...f, [k]: v })); }

  async function submit(e) {
    e.preventDefault();
    setSaving(true); setError('');
    const res = await fetch('/api/patients', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      const p = await res.json();
      router.push(`/admin/patients/${p.id}`);
    } else {
      const d = await res.json();
      setError(d.error);
      setSaving(false);
    }
  }

  return (
    <div className="max-w-xl space-y-6">
      <div className="flex items-center gap-2 text-sm text-gray-400">
        <Link href="/admin" className="hover:text-gray-700">Patients</Link>
        <span>/</span>
        <span className="text-gray-700">New patient</span>
      </div>

      <div>
        <h1 className="text-2xl font-bold text-gray-900">New patient</h1>
        <p className="text-gray-400 text-sm mt-1">Create a record and set portal login credentials</p>
      </div>

      <form onSubmit={submit} className="card p-8 space-y-5">
        <div className="grid grid-cols-2 gap-5">
          <div className="col-span-2">
            <label className="label">Full name *</label>
            <input className="field" value={form.name}
              onChange={e => set('name', e.target.value)} required placeholder="Jane Doe" />
          </div>
          <div className="col-span-2">
            <label className="label">Email address *</label>
            <input className="field" type="email" value={form.email}
              onChange={e => set('email', e.target.value)} required placeholder="jane@example.com" />
          </div>
          <div className="col-span-2">
            <label className="label">Portal password *</label>
            <input className="field" type="password" value={form.password}
              onChange={e => set('password', e.target.value)} required placeholder="Min 6 characters" minLength={6} />
            <p className="text-xs text-gray-400 mt-1">Patient uses this to log into the portal</p>
          </div>
          <div>
            <label className="label">Phone</label>
            <input className="field" value={form.phone}
              onChange={e => set('phone', e.target.value)} placeholder="(555) 000-0000" />
          </div>
          <div>
            <label className="label">Date of birth</label>
            <input className="field" value={form.dateOfBirth}
              onChange={e => set('dateOfBirth', e.target.value)} placeholder="MM/DD/YYYY" />
          </div>
        </div>

        {error && (
          <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {error}
          </div>
        )}

        <div className="flex gap-3 pt-2">
          <button type="submit" className="btn-blue" disabled={saving}>
            {saving ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                </svg>
                Creating…
              </span>
            ) : 'Create patient'}
          </button>
          <Link href="/admin" className="btn-gray">Cancel</Link>
        </div>
      </form>
    </div>
  );
}