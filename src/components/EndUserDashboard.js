// EndUserDashboard.js
import React from 'react';
import { useSelector } from 'react-redux';

const EndUserDashboard = () => {
  const user = useSelector(state => state.auth.user);
  const tickets = useSelector(state => state.tickets.endUserTickets);

  return (
    <div>
      <h2>Welcome, {user.email}!</h2>
      <h3>Your Tickets:</h3>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket.id}>{ticket.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default EndUserDashboard;
