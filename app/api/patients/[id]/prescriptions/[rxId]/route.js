import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function PATCH(req, { params }) {
  const id = Number(params.rxId);
  const body = await req.json();
  const data = {};
  if (body.medication     !== undefined) data.medication     = body.medication;
  if (body.dosage         !== undefined) data.dosage         = body.dosage;
  if (body.quantity       !== undefined) data.quantity       = Number(body.quantity);
  if (body.refillOn       !== undefined) data.refillOn       = body.refillOn;
  if (body.refillSchedule !== undefined) data.refillSchedule = body.refillSchedule;
  const rx = await db.prescription.update({ where: { id }, data });
  return NextResponse.json(rx);
}

export async function DELETE(req, { params }) {
  await db.prescription.delete({ where: { id: Number(params.rxId) } });
  return NextResponse.json({ ok: true });
}