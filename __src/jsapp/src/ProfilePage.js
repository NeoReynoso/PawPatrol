import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  // Sample user data
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    age: 30,
    // Add more user information as needed
  });

  // State for form fields
  const [formValues, setFormValues] = useState({
    name: user.name,
    email: user.email,
    age: user.age,
    // Add more form fields as needed
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Update user data with form values
    setUser({
      ...user,
      name: formValues.name,
      email: formValues.email,
      age: formValues.age,
    });
    // You can send the updated user data to the server here
  };

  return (
    <div>
      <header style={{ backgroundColor: '#333', color: '#fff', padding: '10px', textAlign: 'center' }}>
        <h1>User Profile</h1>
      </header>
      <div style={{ display: 'flex', marginTop: '20px' }}>
        <nav style={{ width: '20%', padding: '10px', backgroundColor: '#f4f4f4', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <h3>Menu</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {/* You can add more menu items here if needed */}
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>
        <section style={{ flex: 1, padding: '20px' }}>
          <h2>Welcome to Your Profile, {user.name}!</h2>
          <h2>Your Email Is, {user.email}.</h2>
          <div>
            <div id="profile">
              <h3>My Profile</h3>
              <form onSubmit={handleSubmit}>
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
                {/* Add more form fields as needed */}
                <button type="submit">Save</button>
              </form>
            </div>
            {/* You can add more sections for additional profile content here */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfilePage;



