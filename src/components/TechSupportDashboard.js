// TechSupportDashboard.js
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const TechSupportDashboard = () => {
  const user = useSelector(state => state.auth.user);
  const tickets = useSelector(state => state.tickets.techSupportTickets);

  return (
    <div>
      <h2>Welcome, {user.email}!</h2>
      <h3>Assigned Tickets:</h3>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket.id}>{ticket.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TechSupportDashboard;
