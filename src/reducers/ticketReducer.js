import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  techSupportTickets: [
    {
      id: 1,
      title: "Issue with application login",
      description: "I am unable to log in to the application using my credentials.",
      createdBy: "John Doe",
      assignedTo: "Tech Support Team",
      status: "Open",
      createdAt: "2024-04-20T10:00:00Z",
      resolvedAt: null,
    },
    {
      id: 2,
      title: "Issue with Network",
      description: "I am unable to log in to the application using my credentials.",
      createdBy: "John Doe",
      assignedTo: "Tech Support Team",
      status: "Open",
      createdAt: "2024-04-20T10:00:00Z",
      resolvedAt: null,
    },{
      id: 3,
      title: "Facing slowness",
      description: "I am unable to log in to the application using my credentials.",
      createdBy: "John Doe",
      assignedTo: "Tech Support Team",
      status: "Open",
      createdAt: "2024-04-20T10:00:00Z",
      resolvedAt: null,
    },{
      id: 4,
      title: "VPN issue",
      description: "I am unable to log in to the application using my credentials.",
      createdBy: "John Doe",
      assignedTo: "Tech Support Team",
      status: "Open",
      createdAt: "2024-04-20T10:00:00Z",
      resolvedAt: null,
    }
  ],
};

const ticketSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    createTicketSuccess(state, action) {
      console.log(action.payload);
      state.push(action.payload);
    },
    updateTicket(state, action) {
      const updatedTicketIndex = state.findIndex(ticket => ticket.id === action.payload.id);
      if (updatedTicketIndex !== -1) {
        state[updatedTicketIndex] = { ...state[updatedTicketIndex], ...action.payload.updates };
      }
    },
    deleteTicket(state, action) {
      state = state.filter(ticket => ticket.id !== action.payload.id);
    },
  },
});

export const { createTicketSuccess, updateTicket, deleteTicket } = ticketSlice.actions;
<<<<<<< HEAD
export default ticketSlice.reducer;
=======
export default ticketSlice.reducer;
>>>>>>> 50b3860ffae9f31099c63a790d50beb60b418406
