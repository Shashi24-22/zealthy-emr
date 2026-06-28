import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import bcrypt from 'bcryptjs';

export async function GET() {
  const patients = await db.user.findMany({
    include: { appointments: true, prescriptions: true },
    orderBy: { createdAt: 'asc' },
  });
  return NextResponse.json(patients.map(({ password, ...p }) => p));
}

export async function POST(req) {
  const { name, email, password, phone, dateOfBirth } = await req.json();

  if (!name || !email || !password) {
    return NextResponse.json({ error: 'Name, email and password are required' }, { status: 400 });
  }

  const exists = await db.user.findUnique({ where: { email } });
  if (exists) {
    return NextResponse.json({ error: 'Email already in use' }, { status: 409 });
  }

  const hashed = await bcrypt.hash(password, 10);
  const user = await db.user.create({ data: { name, email, password: hashed, phone, dateOfBirth } });
  const { password: _, ...safe } = user;
  return NextResponse.json(safe, { status: 201 });
}