import React from 'react';
import {useLocation} from 'react-router-dom';

const UserDashboard = () => {
    const location = useLocation();
    const username = location.state.username;
  return (
    <div>
      <header style={{ backgroundColor: '#333', color: '#fff', padding: '10px', textAlign: 'center' }}>
        <h1>PawPatrol Dashboard</h1>
      </header>

      <div style={{ display: 'flex', marginTop: '20px' }}>
        <nav style={{ width: '20%', padding: '10px', backgroundColor: '#f4f4f4', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <h3>Menu</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="#profile">Profile</a></li>
            <li><a href="#dogs">My Dogs</a></li>
            <li><a href="#appointments">Appointments</a></li>
            <li><a href="#community">Medications</a></li>
          </ul>
        </nav>

        <section style={{ flex: 1, padding: '20px' }}>
          <h2>Welcome, {username}!</h2>
          <div>
            {/* Content for each menu option goes here */}
            <div id="profile">
              <h3>My Profile</h3>
              <p>View and edit your profile information.</p>
            </div>

            <div id="dogs">
              <h3>My Dogs</h3>
              <p>Manage your dogs' profiles and information.</p>
            </div>

            <div id="appointments">
              <h3>Appointments</h3>
              <p>Schedule and view upcoming appointments for your dogs.</p>
            </div>

            <div id="medications">
              <h3>Medications</h3>
              <p>Manage your dogs' Medications.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserDashboard;