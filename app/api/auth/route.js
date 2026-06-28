import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { makeSessionCookie } from '@/lib/auth';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  const { email, password } = await req.json();

  const user = await db.user.findUnique({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  // Always overwrite the session cookie on login
  res.cookies.set('session', makeSessionCookie({ userId: user.id, name: user.name, email: user.email }), {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.delete('session');
  return res;
}