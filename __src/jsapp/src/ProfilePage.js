import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'; // Import your logo image
import './ProfilePage.css'; // Import your CSS file

const ProfilePage = () => {
  // Sample user data
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    age: 30,
    address: '',
    state: '',
    city: '',
    zip: '',
    phone: '',
  });

  // State for form fields
  const [formValues, setFormValues] = useState({
    name: user.name,
    email: user.email,
    age: user.age,
    address: user.address,
    state: user.state,
    city: user.city,
    zip: user.zip,
    phone: user.phone,
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
      address: formValues.address,
      state: formValues.state,
      city: formValues.city,
      zip: formValues.zip,
      phone: formValues.phone,
    });
    // You can send the updated user data to the server here
  };

  return (
    <div className="home-page">
      <div className="header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="logo-text">Paw Patrol</h1> {/* Add logo text */}
        </div>
        <nav>
          <ul>
          <li><a href="/home">Home</a></li>
            <li><Link to="/profile">Profile</Link></li> {/* Link to profile page*/}
            <li><a href="/dogs">My Dogs</a></li>
            <li><a href="/appointments">Appointments</a></li>
            <li><a href="/medications">Medications</a></li>
            <li><a href="/create-account">Account</a></li>
            <li className="login-button"><a href="#">Login</a></li> {/* Add login button */}
          </ul>
        </nav>
      </div>
      <div className='container'>
        <section className='main-section'>
          <h2 className="center">Welcome to Your Profile, {user.name}!</h2>
          <h2 className="center">Your Email Is, {user.email}.</h2>
          <div className="center">
            <div id="profile">
              <h3 className="center">My Profile</h3>
              <form onSubmit={handleSubmit} className="center">
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
                <label>Address:</label>
                <input
                  type="text"
                  name="address"
                  value={formValues.address}
                  onChange={handleInputChange}
                />
                <br />
                <label>State:</label>
                <input
                  type="text"
                  name="state"
                  value={formValues.state}
                  onChange={handleInputChange}
                />
                <br />
                <label>City:</label>
                <input
                  type="text"
                  name="city"
                  value={formValues.city}
                  onChange={handleInputChange}
                />
                <br />
                <label>ZIP:</label>
                <input
                  type="text"
                  name="zip"
                  value={formValues.zip}
                  onChange={handleInputChange}
                />
                <br />
                <label>Phone:</label>
                <input
                  type="text"
                  name="phone"
                  value={formValues.phone}
                  onChange={handleInputChange}
                />
                <br />
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
