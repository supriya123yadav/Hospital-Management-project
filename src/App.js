import React, { useState } from 'react';
import AdminDashboard from './components/AdminDashboard';
import Login from './components/Login';
import PatientSchedule from './components/PatientSchedule';
import DoctorDetails from './components/DoctorDetails';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // To track login state
  const [userType, setUserType] = useState('');         // To differentiate between admin or user

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUserType(user);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />    // If not logged in, show Login screen
      ) : userType === 'admin' ? (
        <AdminDashboard />                // If logged in as Admin, show Admin Dashboard
      ) : (
        <>
          <PatientSchedule />             // If logged in as User, show Patient Schedule and Doctor Details
          <DoctorDetails />
        </>
      )}
    </div>
  );
};

export default App;
