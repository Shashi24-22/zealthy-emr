const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const db = new PrismaClient();

async function main() {
  await db.prescription.deleteMany();
  await db.appointment.deleteMany();
  await db.user.deleteMany();

  const password = await bcrypt.hash('Password123!', 10);

  const mark = await db.user.create({
    data: { name: 'Mark Johnson', email: 'mark@example.com', password },
  });
  const lisa = await db.user.create({
    data: { name: 'Lisa Smith', email: 'lisa@example.com', password },
  });

  await db.appointment.createMany({ data: [
    { provider: 'Dr Kim West',    datetime: '2026-07-16T16:30', repeat: 'weekly',  userId: mark.id },
    { provider: 'Dr Lin James',   datetime: '2026-07-19T18:30', repeat: 'monthly', userId: mark.id },
    { provider: 'Dr Sally Field', datetime: '2026-07-22T18:15', repeat: 'monthly', userId: lisa.id },
    { provider: 'Dr Lin James',   datetime: '2026-07-25T20:00', repeat: 'weekly',  userId: lisa.id },
  ]});

  await db.prescription.createMany({ data: [
    { medication: 'Lexapro',   dosage: '5mg',   quantity: 2, refillOn: '2026-07-05', refillSchedule: 'monthly', userId: mark.id },
    { medication: 'Ozempic',   dosage: '1mg',   quantity: 1, refillOn: '2026-07-01', refillSchedule: 'monthly', userId: mark.id },
    { medication: 'Metformin', dosage: '500mg', quantity: 2, refillOn: '2026-07-15', refillSchedule: 'monthly', userId: lisa.id },
    { medication: 'Diovan',    dosage: '100mg', quantity: 1, refillOn: '2026-07-02', refillSchedule: 'monthly', userId: lisa.id },
  ]});

  console.log('✅ Done! Login with:');
  console.log('   mark@example.com / Password123!');
  console.log('   lisa@example.com / Password123!');
}

main().catch(console.error).finally(() => db.$disconnect());