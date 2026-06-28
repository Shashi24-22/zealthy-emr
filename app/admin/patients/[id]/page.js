import { db } from '@/lib/db';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import PatientEditor from '@/components/PatientEditor';
import AppointmentsManager from '@/components/AppointmentsManager';
import PrescriptionsManager from '@/components/PrescriptionsManager';

const MEDICATIONS = ['Diovan','Lexapro','Metformin','Ozempic','Prozac','Seroquel','Tegretol'];
const DOSAGES     = ['1mg','2mg','3mg','5mg','10mg','25mg','50mg','100mg','250mg','500mg','1000mg'];

export default async function PatientPage({ params }) {
  const id = Number(params.id);
  if (isNaN(id)) notFound();

  const user = await db.user.findUnique({
    where: { id },
    include: { appointments: { orderBy: { id: 'asc' } }, prescriptions: { orderBy: { id: 'asc' } } },
  });
  if (!user) notFound();

  const { password, ...patient } = user;

  return (
    <div className="space-y-6">
      <div className="text-sm text-gray-400">
        <Link href="/admin" className="hover:text-gray-700">← Patients</Link> / {patient.name}
      </div>

      <h1 className="text-xl font-bold">{patient.name}</h1>

      <PatientEditor patient={patient} />
      <AppointmentsManager patientId={id} appointments={patient.appointments} />
      <PrescriptionsManager
        patientId={id}
        prescriptions={patient.prescriptions}
        medications={MEDICATIONS}
        dosages={DOSAGES}
      />
    </div>
  );
}