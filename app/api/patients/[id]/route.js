import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import bcrypt from 'bcryptjs';

export async function GET(req, { params }) {
  const id = Number(params.id);
  const user = await db.user.findUnique({
    where: { id },
    include: { appointments: true, prescriptions: true },
  });
  if (!user) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  const { password, ...safe } = user;
  return NextResponse.json(safe);
}

export async function PATCH(req, { params }) {
  const id = Number(params.id);
  const body = await req.json();
  const data = {};
  if (body.name)        data.name = body.name;
  if (body.email)       data.email = body.email;
  if (body.phone  !== undefined) data.phone = body.phone;
  if (body.dateOfBirth !== undefined) data.dateOfBirth = body.dateOfBirth;
  if (body.password)    data.password = await bcrypt.hash(body.password, 10);

  const user = await db.user.update({ where: { id }, data });
  const { password, ...safe } = user;
  return NextResponse.json(safe);
}

export async function DELETE(req, { params }) {
  await db.user.delete({ where: { id: Number(params.id) } });
  return NextResponse.json({ ok: true });
}