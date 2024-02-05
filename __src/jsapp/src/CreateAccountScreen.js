import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAccountScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleCreateAccount = (e) => {
    e.preventDefault();

    // Add your account creation logic here
    console.log('Creating account with:', { username, password });

    // Redirect to the user dashboard after creating account
    navigate('/dashboard', {
      state: { username: username }
    });
  };

  return (
    <div>
      <header style={{ backgroundColor: '#333', color: '#fff', padding: '10px', textAlign: 'center' }}>
        <h1>PawPatrol Account Registration</h1>
      </header>

      <div style={{ display: 'flex', marginTop: '20px', justifyContent: 'center' }}>
        <form style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', width: '300px', textAlign: 'center' }}>
          <h2>Create Account</h2>
          <input
            type="text"
            placeholder="Username"
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
          <button type="submit" onClick={handleCreateAccount}>Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccountScreen;