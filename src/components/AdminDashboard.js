import React from 'react';
import { useSelector } from 'react-redux';
import styles from 'F:/nishi doc/techsupport_nishi/techsupport_nishi/my-app/src/admindashboard.css'; // Import scoped CSS (optional)

const AdminDashboard = () => {
  const tickets = useSelector(state => state.tickets.allTickets);

  // Handle potential errors (e.g., tickets not yet loaded)
  if (!tickets) {
    return <div>Loading tickets...</div>; // Display a loading message
  }

  if (tickets.length === 0) {
    return <div>No tickets found.</div>; // Display a message for no tickets
  }

  return (
    <div className="container mt-5">
      <h2>Admin Dashboard</h2>
      <h3>All Tickets:</h3>
      <ul className={`${styles.ticketList} list-group`}>
        {tickets.map(ticket => (
          <li key={ticket.id} className={`${styles.ticketItem} list-group-item d-flex justify-content-between align-items-center}`}>
            <div>
              {ticket.title}
              <br />
              <span className="text-muted">Created by: {ticket.createdBy}</span>
            </div>
            <span className="badge bg-primary rounded-pill">{ticket.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
