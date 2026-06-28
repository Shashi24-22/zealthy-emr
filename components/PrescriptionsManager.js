'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PrescriptionsManager({ patientId, prescriptions, medications, dosages }) {
  const router  = useRouter();
  const blank   = { medication: medications[0], dosage: dosages[0], quantity: 1, refillOn: '', refillSchedule: 'monthly' };
  const [form,   setForm]   = useState(blank);
  const [editId, setEditId] = useState(null);
  const [open,   setOpen]   = useState(false);
  const [saving, setSaving] = useState(false);
  const [error,  setError]  = useState('');

  function set(k, v) { setForm(f => ({ ...f, [k]: v })); }

  function startNew() { setForm(blank); setEditId(null); setOpen(true); setError(''); }
  function startEdit(rx) {
    setForm({ medication: rx.medication, dosage: rx.dosage, quantity: rx.quantity, refillOn: rx.refillOn, refillSchedule: rx.refillSchedule });
    setEditId(rx.id); setOpen(true); setError('');
  }
  function cancel() { setOpen(false); setEditId(null); }

  async function save() {
    setSaving(true); setError('');
    const url    = editId ? `/api/patients/${patientId}/prescriptions/${editId}` : `/api/patients/${patientId}/prescriptions`;
    const method = editId ? 'PATCH' : 'POST';
    const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    if (res.ok) { cancel(); router.refresh(); }
    else { const d = await res.json(); setError(d.error || 'Error'); }
    setSaving(false);
  }

  async function del(id) {
    if (!confirm('Delete this prescription?')) return;
    await fetch(`/api/patients/${patientId}/prescriptions/${id}`, { method: 'DELETE' });
    router.refresh();
  }

  return (
    <div className="card p-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold">Prescriptions</h2>
        <button onClick={startNew} className="btn-blue text-xs">+ Prescribe</button>
      </div>

      {open && (
        <div className="bg-purple-50 rounded-lg p-4 mb-4 space-y-3">
          <h3 className="text-sm font-medium text-purple-900">{editId ? 'Edit prescription' : 'New prescription'}</h3>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="label">Medication</label>
              <select className="field" value={form.medication} onChange={e => set('medication', e.target.value)}>
                {medications.map(m => <option key={m}>{m}</option>)}
              </select>
            </div>
            <div>
              <label className="label">Dosage</label>
              <select className="field" value={form.dosage} onChange={e => set('dosage', e.target.value)}>
                {dosages.map(d => <option key={d}>{d}</option>)}
              </select>
            </div>
            <div>
              <label className="label">Quantity</label>
              <input className="field" type="number" min="1" value={form.quantity} onChange={e => set('quantity', e.target.value)} />
            </div>
            <div>
              <label className="label">Refill schedule</label>
              <select className="field" value={form.refillSchedule} onChange={e => set('refillSchedule', e.target.value)}>
                <option value="monthly">Monthly</option>
                <option value="weekly">Weekly</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="label">First refill date</label>
              <input className="field" type="date" value={form.refillOn} onChange={e => set('refillOn', e.target.value)} />
            </div>
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <div className="flex gap-2">
            <button onClick={save} className="btn-blue text-sm" disabled={saving}>{saving ? 'Saving…' : 'Save'}</button>
            <button onClick={cancel} className="btn-gray text-sm">Cancel</button>
          </div>
        </div>
      )}

      {prescriptions.length === 0
        ? <p className="text-sm text-gray-400">No prescriptions yet.</p>
        : prescriptions.map(rx => (
          <div key={rx.id} className="flex items-center gap-3 py-3 border-b last:border-0 text-sm">
            <div className="flex-1">
              <div className="font-medium">{rx.medication} — {rx.dosage}</div>
              <div className="text-gray-400">Qty: {rx.quantity} · {rx.refillSchedule} · next refill: {rx.refillOn || 'N/A'}</div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => startEdit(rx)} className="btn-gray text-xs">Edit</button>
              <button onClick={() => del(rx.id)} className="text-red-500 text-xs hover:underline">Delete</button>
            </div>
          </div>
        ))}
    </div>
  );
}