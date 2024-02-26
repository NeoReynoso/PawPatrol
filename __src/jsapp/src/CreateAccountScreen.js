import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './logo.png'; // Import logo image
import './App.css'; // Importing CSS stylesheet

const CreateAccountScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleCreateAccount = (e) => {
    e.preventDefault();

    // Add your account creation logic here
    console.log('Creating account with:', { email, password });

    // Redirect to the user dashboard after creating account
    navigate('/profile', {
      state: { email: email }
    });
  };

  return (
    <div className="account-page">
      <div className="header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="logo-text">Paw Patrol</h1> {/* Add logo text */}
        </div>
        <nav>
          <ul>
          <li><a href="/">Home</a></li>
            <li><a href="/profile">Profile</a></li> {/* Link to profile page*/}
            <li><a href="/services">Services</a></li>
            <li><a href="/appointments">Appointments</a></li>
            <li><a href="/medications">Medications</a></li>
            <li><a href="/create-account">Account</a></li>
            <li className="login-button"><a href="/login">Login</a></li> {/* Add login button */}
          </ul>
        </nav>
      </div>
      <section className="main-section">
      <h3 className="center">Create Account</h3>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button type="submit" onClick={handleCreateAccount}>Create Account</button>
               </section>
        </div>
   );
};

export default CreateAccountScreen;