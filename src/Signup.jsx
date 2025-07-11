import React, { useState } from 'react';
import './Login.css';

const Signup = ({ onSignup, onSwitchToLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please fill all fields');
      return;
    }
    const ok = onSignup(username, password);
    if (!ok) {
      setError('Username already exists');
    } else {
      setSuccess(true);
      setError('');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        {error && <div className="login-error">{error}</div>}
        {success && <div className="login-success">Signup successful! You can now log in.</div>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Sign up</button>
        <button type="button" className="switch-btn" onClick={onSwitchToLogin}>Back to Login</button>
      </form>
    </div>
  );
};

export default Signup; 