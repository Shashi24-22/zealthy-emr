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
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-400">
        <Link href="/admin" className="hover:text-gray-700">Patients</Link>
        <span>/</span>
        <span className="text-gray-700">{patient.name}</span>
      </div>

      {/* Patient header */}
      <div className="card p-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center flex-shrink-0">
            <span className="text-blue-700 font-bold text-xl">
              {patient.name.split(' ').map(n => n[0]).join('').slice(0,2)}
            </span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{patient.name}</h1>
            <p className="text-gray-400 text-sm">{patient.email}</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="badge-blue">{patient.appointments.length} appointments</span>
              <span className="badge-purple">{patient.prescriptions.length} prescriptions</span>
            </div>
          </div>
        </div>
      </div>

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