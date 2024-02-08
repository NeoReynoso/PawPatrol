import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Import CSS file

const UserDashboard = () => {
  const username = 'John'; // Mock username (replace with actual username)

  // Mock user data (replace with actual user data)
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john@example.com",
    age: 30,
    // Add more user information as needed
  });

  // State for form fields
  const [formValues, setFormValues] = useState({
    name: userData.name,
    email: userData.email,
    age: userData.age,
    // Add more form fields as needed
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Update formValues when userData changes
  useEffect(() => {
    setFormValues({
      name: userData.name,
      email: userData.email,
      age: userData.age,
    });
  }, [userData]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Update user data with form values
    setUserData({
      name: formValues.name,
      email: formValues.email,
      age: formValues.age,
      // Add more user information as needed
    });
    // You can send the updated user data to the server here
  };
 
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
