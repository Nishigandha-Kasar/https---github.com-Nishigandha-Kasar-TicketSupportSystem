// Define initial state with multiple sample tickets
const initialState = {
  tickets: [
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
      title: "Slow performance on certain pages",
      description: "The application is slow to load specific pages, particularly the reports section.",
      createdBy: "Jane Smith",
      assignedTo: "Development Team",
      status: "Open",
      createdAt: "2024-04-20T11:00:00Z",
      resolvedAt: null,
    },
    {
      id: 3,
      title: "Feature request: Add new report type",
      description: "I would like to see a new report type that shows user activity by department.",
      createdBy: "Michael Lee",
      assignedTo: "Product Team",
      status: "New",
      createdAt: "2024-04-20T12:00:00Z",
      resolvedAt: null,
    },
    // Add more sample tickets as needed
  ],
  // Add other ticket-related state variables (optional)
};

// Function to load more tickets (simulates fetching data)
const loadMoreTickets = (numberOfTickets) => {
  // Simulate fetching data from an API or other source
  // Replace with your actual data fetching logic
  const newTickets = [];
  for (let i = 0; i < numberOfTickets; i++) {
    newTickets.push({
      id: initialState.tickets.length + 1 + i, // Generate unique IDs
      title: `Sample Ticket ${i + 1}`,
      description: `This is a sample ticket description for ticket ${i + 1}.`,
      createdBy: "System",
      assignedTo: " unassigned",
      status: "New",
      createdAt: new Date().toISOString(),
      resolvedAt: null,
    });
  }
  return newTickets;
};

// Define the ticket reducer function
const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_TICKET':
      // Logic to handle creating a new ticket
      return {
        ...state,
        tickets: [...state.tickets, action.payload], // Add the new ticket to the list
      };
    case 'RESOLVE_TICKET':
      // Logic to handle resolving a ticket
      const updatedTickets = state.tickets.map(ticket =>
        ticket.id === action.payload ? { ...ticket, status: 'Resolved', resolvedAt: action.resolvedAt } : ticket
      );
      return {
        ...state,
        tickets: updatedTickets, // Update the ticket status and resolvedAt timestamp
      };
    case 'LOAD_MORE_TICKETS':
      const additionalTickets = loadMoreTickets(action.payload);
      return {
        ...state,
        tickets: [...state.tickets, ...additionalTickets], // Add loaded tickets to existing ones
      };
    // Add other cases to handle different ticket-related actions

    default:
      return state;
  }
};

export default ticketReducer;
