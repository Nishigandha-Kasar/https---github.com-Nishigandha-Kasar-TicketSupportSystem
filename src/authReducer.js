// authReducer.js
const initialState = {
    isAuthenticated: false,
    user: null,
    // Add other authentication-related state variables
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      // Handle authentication-related actions here
      default:
        return state;
    }
  };
  
  export default authReducer;
  