import { combineReducers } from 'redux';
import authReducer from './authReducer'; // Import your authentication reducer
import ticketReducer from './reducers/ticketReducer'; // Import your ticket reducer

const rootReducer = combineReducers({
  auth: authReducer,
  tickets: ticketReducer,
  // Add other reducers here
});

export default rootReducer;
