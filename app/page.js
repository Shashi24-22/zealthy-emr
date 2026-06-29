'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');
  const [loading, setLoading]   = useState(false);

  async function login(e) {
    e.preventDefault();
    setLoading(true); setError('');
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) {
        router.refresh();
      router.push('/portal');
    } else {
      const d = await res.json();
      setError(d.error);
      setLoading(false);
    }
  }

  function fillDemo(e, pw) { setEmail(e); setPassword(pw); }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="w-full max-w-sm">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Zealthy Patient Portal</h1>
          <p className="text-gray-500 text-sm mt-1">Sign in to view your health info</p>
        </div>

        <div className="card p-6 space-y-4">
          <form onSubmit={login} className="space-y-4">
            <div>
              <label className="label">Email</label>
              <input className="field" type="email" value={email}
                onChange={e => setEmail(e.target.value)} required placeholder="you@example.com" />
            </div>
            <div>
              <label className="label">Password</label>
              <input className="field" type="password" value={password}
                onChange={e => setPassword(e.target.value)} required placeholder="••••••••" />
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <button className="btn-blue w-full justify-center py-2" disabled={loading}>
              {loading ? 'Signing in…' : 'Sign in'}
            </button>
          </form>

          <div className="border-t pt-4">
            <p className="text-xs text-gray-400 mb-2 text-center">Demo accounts</p>
            <div className="flex gap-2">
              <button onClick={() => fillDemo('mark@some-email-provider.net', 'Password123!')}
                className="flex-1 text-xs bg-gray-100 hover:bg-gray-200 rounded p-2 text-left transition-colors">
                <div className="font-medium">Mark Johnson</div>
                <div className="text-gray-400">mark@some-email-provider.net</div>
              </button>
              <button onClick={() => fillDemo('lisa@some-email-provider.net', 'Password123!')}
                className="flex-1 text-xs bg-gray-100 hover:bg-gray-200 rounded p-2 text-left transition-colors">
                <div className="font-medium">Lisa Smith</div>
                <div className="text-gray-400">lisa@some-email-provider.net</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}