import React, { useState } from 'react';
import { useNavigate, } from 'react-router-dom';


const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Add your login logic here
    console.log('Logging in with:', { username, password });
    if (username && password) {
      // Navigate to the user dashboard
      navigate('/dashboard', {
        state: { username: username }
      });
    }     
  };

  const handleRegisterClick = () => {
    // Navigate to the CreateAccountScreen
    navigate('/create-account');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', width: '300px', textAlign: 'center' }}>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
  );
};

export default LoginScreen;