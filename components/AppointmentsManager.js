'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const blank = { provider: '', datetime: '', repeat: 'none', endDate: '' };

export default function AppointmentsManager({ patientId, appointments }) {
  const router  = useRouter();
  const [form,   setForm]   = useState(blank);
  const [editId, setEditId] = useState(null);
  const [open,   setOpen]   = useState(false);
  const [saving, setSaving] = useState(false);
  const [error,  setError]  = useState('');

  function set(k, v) { setForm(f => ({ ...f, [k]: v })); }

  function startNew() { setForm(blank); setEditId(null); setOpen(true); setError(''); }
  function startEdit(a) {
    setForm({ provider: a.provider, datetime: a.datetime.slice(0,16), repeat: a.repeat, endDate: a.endDate || '' });
    setEditId(a.id); setOpen(true); setError('');
  }
  function cancel() { setOpen(false); setEditId(null); }

  async function save() {
    setSaving(true); setError('');
    const url    = editId ? `/api/patients/${patientId}/appointments/${editId}` : `/api/patients/${patientId}/appointments`;
    const method = editId ? 'PATCH' : 'POST';
    const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    if (res.ok) { cancel(); router.refresh(); }
    else { const d = await res.json(); setError(d.error || 'Error'); }
    setSaving(false);
  }

  async function del(id) {
    if (!confirm('Delete this appointment?')) return;
    await fetch(`/api/patients/${patientId}/appointments/${id}`, { method: 'DELETE' });
    router.refresh();
  }

  async function endSeries(a) {
    const today = new Date().toISOString().slice(0, 10);
    await fetch(`/api/patients/${patientId}/appointments/${a.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ endDate: today }),
    });
    router.refresh();
  }

  return (
    <div className="card p-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold">Appointments</h2>
        <button onClick={startNew} className="btn-blue text-xs">+ Schedule</button>
      </div>

      {open && (
        <div className="bg-blue-50 rounded-lg p-4 mb-4 space-y-3">
          <h3 className="text-sm font-medium text-blue-900">{editId ? 'Edit appointment' : 'New appointment'}</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2">
              <label className="label">Provider name</label>
              <input className="field" value={form.provider} onChange={e => set('provider', e.target.value)} placeholder="Dr. Smith" />
            </div>
            <div>
              <label className="label">Date & time</label>
              <input className="field" type="datetime-local" value={form.datetime} onChange={e => set('datetime', e.target.value)} />
            </div>
            <div>
              <label className="label">Repeat</label>
              <select className="field" value={form.repeat} onChange={e => set('repeat', e.target.value)}>
                <option value="none">No repeat</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
            {form.repeat !== 'none' && (
              <div>
                <label className="label">End date (optional)</label>
                <input className="field" type="date" value={form.endDate} onChange={e => set('endDate', e.target.value)} />
              </div>
            )}
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <div className="flex gap-2">
            <button onClick={save} className="btn-blue text-sm" disabled={saving}>{saving ? 'Saving…' : 'Save'}</button>
            <button onClick={cancel} className="btn-gray text-sm">Cancel</button>
          </div>
        </div>
      )}

      {appointments.length === 0
        ? <p className="text-sm text-gray-400">No appointments yet.</p>
        : appointments.map(a => (
          <div key={a.id} className="flex items-center gap-3 py-3 border-b last:border-0 text-sm">
            <div className="flex-1">
              <div className="font-medium">{a.provider}</div>
              <div className="text-gray-400">
                {new Date(a.datetime).toLocaleString()} · {a.repeat !== 'none' ? a.repeat : 'one-time'}
                {a.endDate && ` · ends ${a.endDate}`}
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => startEdit(a)} className="btn-gray text-xs">Edit</button>
              {a.repeat !== 'none' && <button onClick={() => endSeries(a)} className="btn-gray text-xs">End series</button>}
              <button onClick={() => del(a.id)} className="text-red-500 text-xs hover:underline">Delete</button>
            </div>
          </div>
        ))}
    </div>
  );
}