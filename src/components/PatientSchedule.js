import React, { useState, useEffect } from 'react';

const PatientSchedule = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    // Mock data for schedules
    const mockSchedules = [
      { surgeryId: 'S1', date: '2024-09-26', doctor: 'Dr. Smith' },
      { surgeryId: 'S2', date: '2024-10-02', doctor: 'Dr. Adams' },
    ];
    setSchedules(mockSchedules);
  }, []);

  return (
    <div>
      <h1>Patient Surgery Schedule</h1>
      {schedules.map((schedule) => (
        <p key={schedule.surgeryId}>
          Surgery ID: {schedule.surgeryId}, Date: {schedule.date}, Doctor: {schedule.doctor}
        </p>
      ))}
    </div>
  );
};

export default PatientSchedule;
