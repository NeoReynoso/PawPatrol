//import React from 'react';
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const UserDashboard = () => {
  const location = useLocation();
  const username = location.state.username;

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
            <li><Link to="/medications">Medications</Link></li>
            <li><a href="#account">Account</a></li>
          </ul>
        </nav>

        <section style={{ flex: 1, padding: '20px' }}>
          <h2>Welcome, {username}!</h2>
          <div>
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
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formValues.name}
                  onChange={handleInputChange}
                />
                <br />
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                />
                <br />
                <label>Age:</label>
                <input
                  type="number"
                  name="age"
                  value={formValues.age}
                  onChange={handleInputChange}
                />
                <br />
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