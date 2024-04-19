import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'; // Added for error handling
import { Link } from 'react-router-dom'; // For navigation
import 'F:/nishi doc/techsupport_nishi/techsupport_nishi/my-app/src/EndUser.css';
const EndUserRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const registerError = useSelector(state => state.auth.registerError); // Access error state (if applicable)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://localhost:7198/api/Student_API', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(`Registration failed: ${response.statusText}`);
      }

      const data = await response.json();
      // Handle successful registration (e.g., redirect, display success message)
      console.log('Registration successful!');
    } catch (error) {
      console.error('Registration error:', error);
      // Set registerError state with an informative error message (if using Redux)
    }
  };

  return (
    <div className="register-container">
      <div className="register-form-wrapper">
        <h2>End User Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          <p className="mt-3">
            Already have an account? <Link to="/end-user/login">Login</Link>
          </p>
          {registerError && (
            <div className="alert alert-danger mt-3">{registerError}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default EndUserRegister;
