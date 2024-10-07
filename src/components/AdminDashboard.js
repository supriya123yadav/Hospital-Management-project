import React, { useState } from 'react';

const AdminDashboard = () => {
  const [doctors, setDoctors] = useState([]);    // Manage list of doctors
  const [patients, setPatients] = useState([]);  // Manage list of patients
  const [surgeries, setSurgeries] = useState([]); // Manage surgery schedules

  const addDoctor = () => {
    const newDoctor = { id: `D${doctors.length + 1}`, name: 'Dr. Smith' };
    setDoctors([...doctors, newDoctor]);
  };

  const addPatient = () => {
    const newPatient = { id: `P${patients.length + 1}`, name: 'John Doe' };
    setPatients([...patients, newPatient]);
  };

  const postSchedule = () => {
    const newSchedule = {
      surgeryId: `S${surgeries.length + 1}`,
      doctorId: `D1`,
      patientId: `P1`,
      date: '2024-09-26',
    };
    setSurgeries([...surgeries, newSchedule]);
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button onClick={addDoctor}>Add Doctor</button>
      <button onClick={addPatient}>Add Patient</button>
      <button onClick={postSchedule}>Post Surgery Schedule</button>

      <h2>Doctors</h2>
      {doctors.map((doc) => (
        <p key={doc.id}>{doc.name}</p>
      ))}

      <h2>Patients</h2>
      {patients.map((pat) => (
        <p key={pat.id}>{pat.name}</p>
      ))}

      <h2>Surgery Schedules</h2>
      {surgeries.map((surg) => (
        <p key={surg.surgeryId}>
          Surgery ID: {surg.surgeryId}, Doctor ID: {surg.doctorId}, Patient ID: {surg.patientId}, Date: {surg.date}
        </p>
      ))}
    </div>
  );
};

export default AdminDashboard;
