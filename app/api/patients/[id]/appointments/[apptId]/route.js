import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function PATCH(req, { params }) {
  const id = Number(params.apptId);
  const body = await req.json();
  const data = {};
  if (body.provider !== undefined) data.provider = body.provider;
  if (body.datetime !== undefined) data.datetime = body.datetime;
  if (body.repeat   !== undefined) data.repeat   = body.repeat;
  if (body.endDate  !== undefined) data.endDate  = body.endDate;
  const appt = await db.appointment.update({ where: { id }, data });
  return NextResponse.json(appt);
}

export async function DELETE(req, { params }) {
  await db.appointment.delete({ where: { id: Number(params.apptId) } });
  return NextResponse.json({ ok: true });
}