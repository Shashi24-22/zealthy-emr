import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req, { params }) {
  const userId = Number(params.id);
  const { medication, dosage, quantity, refillOn, refillSchedule } = await req.json();
  const rx = await db.prescription.create({
    data: { medication, dosage, quantity: Number(quantity) || 1, refillOn, refillSchedule: refillSchedule || 'monthly', userId },
  });
  return NextResponse.json(rx, { status: 201 });
}