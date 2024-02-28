import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component for routing
import './App.css'; // Import CSS stylesheet
import logo from './logo.png'; // Import logo image
import image1 from './Walkdog.jpg'; // Import image files
import image2 from './petsitting.JPG';
import image3 from './petboarding.jpg';
import image4 from './Vetpet.jpg';

function ServicesPage() {
  return (
    <div className="service-page">
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
      <div className="services-container">
        <div className="service">
          <img src={image1} alt="Walking" />
          <div className="overlay">Walking</div>
        </div>
        <div className="service">
          <img src={image2} alt="Pet Sitting" />
          <div className="overlay">Pet Sitting</div>
        </div>
        <div className="service">
          <img src={image3} alt="Boarding" />
          <div className="overlay">Boarding</div>
        </div>
        <div className="service">
          <a href="/medications"><img src={image4} alt="veteriarian" /></a>
          <div className="overlay">Veterinarian</div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
