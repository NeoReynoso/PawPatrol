import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Import CSS file

const UserDashboard = () => {
    const location = useLocation();
    const username = location.state.username;
  return (
    <div>
      <header className="header">
        <h1>PawPatrol Dashboard</h1>
      </header>

      <div className="container">
        <nav className="menu">  
          <h3>Menu</h3>
          <ul className="menu-list">
            <li><Link to="/profile">Profile</Link></li>
            <li><a href="#dogs">My Dogs</a></li>
            <li><Link to="/appointments">Appointments</Link></li>
            <li><Link to="/medications">Medications</Link></li>
            <li><a href="#account">Account</a></li>
          </ul>
        </nav>

        <section className="main-section">
          <h2>Welcome, {username}!</h2>
          <div className="content">
            <div id="profile">
              <h3>My Profile</h3>
              <form onSubmit={handleSubmit}>
                <label>Name:</label>
                {formValues.name !== userData.name ? (
                  <input
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p>{userData.name}</p>
                )}
                <br />
                <label>Email:</label>
                {formValues.email !== userData.email ? (
                  <input
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p>{userData.email}</p>
                )}
                <br />
                <label>Age:</label>
                {formValues.age !== userData.age ? (
                  <input
                    type="number"
                    name="age"
                    value={formValues.age}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p>{userData.age}</p>
                )}
                <button type="submit">Save</button>
              </form>
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
