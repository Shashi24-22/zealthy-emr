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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 p-4">
      <div className="w-full max-w-md">
        {/* Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg mb-4">
            <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.5l7.5-7.5 7.5 7.5M4.5 19.5l7.5-7.5 7.5 7.5" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white">Zealthy Health</h1>
          <p className="text-blue-200 mt-1">Patient Portal</p>
        </div>

        <div className="card p-8">
          <form onSubmit={login} className="space-y-5">
            <div>
              <label className="label">Email address</label>
              <input className="field" type="email" value={email}
                onChange={e => setEmail(e.target.value)} required placeholder="you@example.com" />
            </div>
            <div>
              <label className="label">Password</label>
              <input className="field" type="password" value={password}
                onChange={e => setPassword(e.target.value)} required placeholder="••••••••" />
            </div>

            {error && (
              <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {error}
              </div>
            )}

            <button className="btn-blue w-full justify-center py-2.5 text-base" disabled={loading}>
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  Signing in…
                </span>
              ) : 'Sign in'}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <p className="text-xs text-gray-400 text-center mb-3 font-medium uppercase tracking-wide">Demo accounts</p>
            <div className="grid grid-cols-2 gap-3">
              <button onClick={() => fillDemo('mark@some-email-provider.net', 'Password123!')}
                className="p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors text-left border border-blue-100">
                <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center mb-2">
                  <span className="text-white text-xs font-bold">MJ</span>
                </div>
                <div className="font-semibold text-gray-800 text-sm">Mark Johnson</div>
                <div className="text-gray-400 text-xs truncate">mark@some-email-provider.net</div>
              </button>
              <button onClick={() => fillDemo('lisa@some-email-provider.net', 'Password123!')}
                className="p-3 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors text-left border border-purple-100">
                <div className="w-7 h-7 rounded-full bg-purple-600 flex items-center justify-center mb-2">
                  <span className="text-white text-xs font-bold">LS</span>
                </div>
                <div className="font-semibold text-gray-800 text-sm">Lisa Smith</div>
                <div className="text-gray-400 text-xs truncate">lisa@some-email-provider.net</div>
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-blue-200 text-xs mt-6">
          Admin EMR? <a href="/admin" className="text-white underline">Go to Admin →</a>
        </p>
      </div>
    </div>
  );
}