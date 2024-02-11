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
      <header className='header' >
        <h1>User Profile</h1>
      </header>
      <div className='container'>
        <nav className='menu'>
          <h3>Menu</h3>
          <ul className='menu-list'>
          <li><Link to="/profile">Profile</Link></li>
              <li><a href="#dogs">My Dogs</a></li>
              <li><Link to="/appointments">Appointments</Link></li>
              <li><Link to="/medications">Medications</Link></li>
              <li><a href="#account">Account</a></li>
          </ul>
        </nav>
        <section className='main-section'>
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



