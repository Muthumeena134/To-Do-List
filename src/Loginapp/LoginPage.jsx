import React, { useState } from 'react';
import './LoginPage.css'; 


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
   
    if (email === "user@example.com" && password === "password123") {
        const userData = { email, password };
        localStorage.setItem('user', JSON.stringify(userData));
      window.location.href = '/landing';
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      {error && <div className="error">{error}</div>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input-field"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input-field"
      />
      <button onClick={handleLogin} className="login-button">Login</button>
    </div>
  );
};

export default LoginPage;
