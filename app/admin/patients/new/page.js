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
    <div className="max-w-lg space-y-4">
      <div className="text-sm text-gray-400">
        <Link href="/admin" className="hover:text-gray-700">← Patients</Link> / New patient
      </div>
      <h1 className="text-xl font-bold">New patient</h1>

      <form onSubmit={submit} className="card p-6 space-y-4">
        <div>
          <label className="label">Full name *</label>
          <input className="field" value={form.name} onChange={e => set('name', e.target.value)} required placeholder="Jane Doe" />
        </div>
        <div>
          <label className="label">Email *</label>
          <input className="field" type="email" value={form.email} onChange={e => set('email', e.target.value)} required placeholder="jane@example.com" />
        </div>
        <div>
          <label className="label">Portal password *</label>
          <input className="field" type="password" value={form.password} onChange={e => set('password', e.target.value)} required placeholder="Min 6 chars" minLength={6} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="label">Phone</label>
            <input className="field" value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="(555) 000-0000" />
          </div>
          <div>
            <label className="label">Date of birth</label>
            <input className="field" value={form.dateOfBirth} onChange={e => set('dateOfBirth', e.target.value)} placeholder="MM/DD/YYYY" />
          </div>
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <div className="flex gap-2 pt-1">
          <button type="submit" className="btn-blue" disabled={saving}>{saving ? 'Creating…' : 'Create patient'}</button>
          <Link href="/admin" className="btn-gray">Cancel</Link>
        </div>
      </form>
    </div>
  );
}