import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req, { params }) {
  const userId = Number(params.id);
  const { provider, datetime, repeat, endDate } = await req.json();
  const appt = await db.appointment.create({
    data: { provider, datetime, repeat: repeat || 'none', endDate: endDate || null, userId },
  });
  return NextResponse.json(appt, { status: 201 });
}