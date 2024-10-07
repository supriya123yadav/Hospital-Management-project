import React, { useState, useEffect } from 'react';

const DoctorDetails = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Mock data representing doctor details
    const mockDoctors = [
      { id: 'D1', name: 'Dr. Smith', specialization: 'Cardiology' },
      { id: 'D2', name: 'Dr. Adams', specialization: 'Neurology' },
    ];
    setDoctors(mockDoctors);
  }, []);

  return (
    <div>
      <h1>Doctor Details</h1>
      {doctors.map((doc) => (
        <p key={doc.id}>
          Doctor ID: {doc.id}, Name: {doc.name}, Specialization: {doc.specialization}
        </p>
      ))}
    </div>
  );
};

export default DoctorDetails;
