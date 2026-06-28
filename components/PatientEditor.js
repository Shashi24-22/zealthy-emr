'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PatientEditor({ patient }) {
  const router = useRouter();
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    name: patient.name, email: patient.email,
    phone: patient.phone || '', dateOfBirth: patient.dateOfBirth || '', password: '',
  });
  const [saving, setSaving] = useState(false);
  const [error,  setError]  = useState('');

  function set(k, v) { setForm(f => ({ ...f, [k]: v })); }

  async function save() {
    setSaving(true); setError('');
    const body = { name: form.name, email: form.email, phone: form.phone, dateOfBirth: form.dateOfBirth };
    if (form.password) body.password = form.password;

    const res = await fetch(`/api/patients/${patient.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (res.ok) { setEditing(false); router.refresh(); }
    else { const d = await res.json(); setError(d.error); }
    setSaving(false);
  }

  if (!editing) return (
    <div className="card p-5">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-semibold">Patient info</h2>
        <button onClick={() => setEditing(true)} className="btn-gray text-xs">Edit</button>
      </div>
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div><span className="text-gray-400">Name: </span>{patient.name}</div>
        <div><span className="text-gray-400">Email: </span>{patient.email}</div>
        {patient.phone       && <div><span className="text-gray-400">Phone: </span>{patient.phone}</div>}
        {patient.dateOfBirth && <div><span className="text-gray-400">DOB: </span>{patient.dateOfBirth}</div>}
      </div>
    </div>
  );

  return (
    <div className="card p-5 space-y-3">
      <h2 className="font-semibold">Edit patient info</h2>
      <div className="grid grid-cols-2 gap-3">
        <div><label className="label">Name</label><input className="field" value={form.name} onChange={e => set('name', e.target.value)} /></div>
        <div><label className="label">Email</label><input className="field" type="email" value={form.email} onChange={e => set('email', e.target.value)} /></div>
        <div><label className="label">Phone</label><input className="field" value={form.phone} onChange={e => set('phone', e.target.value)} /></div>
        <div><label className="label">Date of birth</label><input className="field" value={form.dateOfBirth} onChange={e => set('dateOfBirth', e.target.value)} /></div>
        <div className="col-span-2"><label className="label">New password (blank = no change)</label><input className="field" type="password" value={form.password} onChange={e => set('password', e.target.value)} placeholder="••••••••" /></div>
      </div>
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <div className="flex gap-2">
        <button onClick={save} className="btn-blue" disabled={saving}>{saving ? 'Saving…' : 'Save'}</button>
        <button onClick={() => setEditing(false)} className="btn-gray">Cancel</button>
      </div>
    </div>
  );
}