import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../actions/auth';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const EndUserLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [loginError, setLoginError] = useState(null); // State to store login error message


  const handleLoginSuccess = () => {
    // Perform login logic
    navigate('/dashboard'); // Redirect to dashboard on success
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError(null); // Clear any previous error before login attempt

    try {
      const response = await dispatch(loginUser({ email, password }));
      if (response?.success) {
        console.log('Login successful!');
        // Handle successful login (redirect, update state, etc.)
      } else {
        console.error('Login failed:', response?.error);
        setLoginError(response?.error || 'Login failed. Please try again.'); // Set error message (if provided)
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoginError('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <h2>End User Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
        {loginError && <p className="error-message">{loginError}</p>}
      </form>
    </div>
  );
};

export default EndUserLogin;
