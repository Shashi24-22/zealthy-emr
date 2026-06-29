const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const db = new PrismaClient();

async function main() {
  await db.prescription.deleteMany();
  await db.appointment.deleteMany();
  await db.user.deleteMany();

  const password = await bcrypt.hash('Password123!', 10);

  const mark = await db.user.create({
    data: { name: 'Mark Johnson', email: 'mark@some-email-provider.net', password },
  });
  const lisa = await db.user.create({
    data: { name: 'Lisa Smith', email: 'lisa@some-email-provider.net', password },
  });

  await db.appointment.createMany({ data: [
    { provider: 'Dr Kim West',    datetime: '2026-04-16T16:30', repeat: 'weekly',  userId: mark.id },
    { provider: 'Dr Lin James',   datetime: '2026-04-19T18:30', repeat: 'monthly', userId: mark.id },
    { provider: 'Dr Sally Field', datetime: '2026-04-22T18:15', repeat: 'monthly', userId: lisa.id },
    { provider: 'Dr Lin James',   datetime: '2026-04-25T20:00', repeat: 'weekly',  userId: lisa.id },
  ]});

  await db.prescription.createMany({ data: [
    { medication: 'Lexapro',   dosage: '5mg',   quantity: 2, refillOn: '2026-04-05', refillSchedule: 'monthly', userId: mark.id },
    { medication: 'Ozempic',   dosage: '1mg',   quantity: 1, refillOn: '2026-04-10', refillSchedule: 'monthly', userId: mark.id },
    { medication: 'Metformin', dosage: '500mg', quantity: 2, refillOn: '2026-04-15', refillSchedule: 'monthly', userId: lisa.id },
    { medication: 'Diovan',    dosage: '100mg', quantity: 1, refillOn: '2026-04-25', refillSchedule: 'monthly', userId: lisa.id },
  ]});

  console.log('✅ Done! Login with:');
  console.log('   mark@some-email-provider.net / Password123!');
  console.log('   lisa@some-email-provider.net / Password123!');
}

main().catch(console.error).finally(() => db.$disconnect());