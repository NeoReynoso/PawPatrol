import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import './App.css'; // Import CSS stylesheet
import logo from './logo.png'; // Import logo image

function HomePage() {
  return (
    <div className="home-page">
      <div className="header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="logo-text">Paw Patrol</h1> {/* Add logo text */}
        </div>
        <nav>
          <ul>
            <li><Link to="/profile">Profile</Link></li> {/* Link to profile page*/}
            <li><a href="/services">Services</a></li>
            <li><a href="/appointments">Appointments</a></li>
            <li><a href="/medications">Medications</a></li>
            <li><a href="/create-account">Account</a></li>
            <li className="login-button"><a href="/login">Login</a></li> {/* Add login button */}
          </ul>
        </nav>
      </div>
      <div className="background-image">
        <div className="content">
          <h2>Welcome to Paw Patrol</h2>
          <p>Where you can find the best comfort for your pet.</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
