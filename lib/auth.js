import { cookies } from 'next/headers';

export function getSession() {
  const cookieStore = cookies();
  const raw = cookieStore.get('session')?.value;
  if (!raw) return null;
  try {
    return JSON.parse(Buffer.from(raw, 'base64').toString('utf8'));
  } catch {
    return null;
  }
}

export function makeSessionCookie(payload) {
  return Buffer.from(JSON.stringify(payload)).toString('base64');
}