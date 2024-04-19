// auth.js
import axios from 'axios';

export const loginUser = userData => dispatch => {
  // Simulate a login API call
  axios.post('/api/login', userData)
    .then(res => {
      // Simulate successful login
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: res.data.user // Assuming the API returns user data upon successful login
      });
    })
    .catch(err => {
      // Simulate login failure
      dispatch({
        type: 'LOGIN_FAILURE',
        payload: err.response.data.message // Assuming the API returns error message
      });
    });
};

export const registerUser = userData => dispatch => {
  // Simulate a registration API call
  axios.post('/api/register', userData)
    .then(res => {
      // Simulate successful registration
      dispatch({
        type: 'REGISTER_SUCCESS',
        payload: res.data.user // Assuming the API returns user data upon successful registration
      });
    })
    .catch(err => {
      // Simulate registration failure
      dispatch({
        type: 'REGISTER_FAILURE',
        payload: err.response.data.message // Assuming the API returns error message
      });
    });
};
