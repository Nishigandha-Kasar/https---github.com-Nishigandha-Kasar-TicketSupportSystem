// ticket.js
import axios from 'axios';

export const createTicket = ticketData => dispatch => {
  // Simulate a ticket creation API call
  axios.post('/api/tickets', ticketData)
    .then(res => {
      // Simulate successful ticket creation
      dispatch({
        type: 'CREATE_TICKET_SUCCESS',
        payload: res.data.ticket // Assuming the API returns the created ticket object
      });
    })
    .catch(err => {
      // Simulate ticket creation failure
      dispatch({
        type: 'CREATE_TICKET_FAILURE',
        payload: err.response.data.message // Assuming the API returns error message
      });
    });
};

export const resolveTicket = ticketId => dispatch => {
  // Simulate a ticket resolution API call
  axios.put(`/api/tickets/${ticketId}/resolve`)
    .then(res => {
      // Simulate successful ticket resolution
      dispatch({
        type: 'RESOLVE_TICKET_SUCCESS',
        payload: ticketId // Pass the ticket ID to mark it as resolved
      });
    })
    .catch(err => {
      // Simulate ticket resolution failure
      dispatch({
        type: 'RESOLVE_TICKET_FAILURE',
        payload: err.response.data.message // Assuming the API returns error message
      });
    });
};
