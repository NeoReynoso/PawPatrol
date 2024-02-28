import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Import your CSS file
import logo from './logo.png'; // Import your logo image

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
    if (email && password) {
      navigate('/services', { /*route to page*/
        state: { email: email }
      });
    }     
  };

  const handleRegisterClick = () => {
    navigate('/create-account');
  };

  return (
    <div className="profile-page">
      <div className="header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="logo-text">Paw Patrol</h1>
        </div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/appointments">Appointments</a></li>
            <li><a href="/medications">Medications</a></li>
            <li><a href="/create-account">Account</a></li>
          </ul>
        </nav>
      </div>
      <div className="login-container"> {/* Added a container div */}
        <div className="login-form">
        <h2>Login to Paw Patrol</h2>
         <form onSubmit={handleLogin}>
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
            <button type="submit">Login</button>
          </form>
          <button onClick={handleRegisterClick}>Account Register</button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
