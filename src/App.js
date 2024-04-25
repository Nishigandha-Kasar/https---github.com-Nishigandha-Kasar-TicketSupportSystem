// App.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'; // Assuming your Redux store
import EndUserLogin from './components/EndUserLogin';
import EndUserRegister from './components/EndUserRegister';
import EndUserDashboard from './components/EndUserDashboard';
import TechSupportDashboard from './components/TechSupportDashboard';
import AdminDashboard from './components/AdminDashboard';
import PrivateRoute from './components/PrivateRoute'; // Assuming this is your private route component (updated for v6)
import CreateTicketForm from './components/CreateTicketForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
 
  //const navigate = useNavigate(); 
  const handleLoginSuccess = () => {
    // Perform actions on successful login (e.g., update Redux store)
    //navigate('/end-user/dashboard'); // Redirect to dashboard on success
  };

  const handleError = (error) => {
    // Optional centralized error handling (e.g., display a global error message)
    console.error('Login error:', error);
  };

  return (
    <Provider store={store}>
      <Router>
      <div className="container mt-5">
      <h1>Welcome to the Ticket Management System</h1>
      
      {/* Rest of your application components and logic */}
    </div>
        <Routes>
        <Route path="/" element={<div><div className="d-flex justify-content-center">
       
        <Link to="/end-user/login" className="btn btn-primary me-3">Login</Link>
        <Link to="/tech-support/dashboard" className="btn btn-primary me-3">Tech Support Team</Link>
        <Link to="/logout" className="btn btn-primary">Logout</Link>
      </div></div>} />
            <Route path="/end-user/login" element={<EndUserLogin />} />
            <Route path="/end-user/register" element={<EndUserRegister />} />
            <Route
              exact
              path="/end-user/dashboard"
              element={<PrivateRoute redirectTo="/end-user/login" />}
            />
            <Route exact path="/end-user/create-ticket" element={<CreateTicketForm />} />
            <Route
              exact
              path="/admin/admin-dashboard"
              element={<PrivateRoute redirectTo="/end-user/login" />}
            />
             <Route
              exact
              path="/tech-support/dashboard"
              element={<PrivateRoute redirectTo="/end-user/login" />}
            />
            {/* <Route exact path="/logout" element={<Logout />} /> Add your Logout component */}
          
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
