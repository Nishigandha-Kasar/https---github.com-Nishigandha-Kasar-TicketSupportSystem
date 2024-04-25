import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      const { username, password } = action.payload;
      state.loading = true;

      fetch('https://localhost:7198/api/Student_API/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Login failed');
          }
          return response.json();
        })
        .then((data) => {
          state.loading = false;
          const token = response.headers.get('Authorization'); // Extract token from headers
          const userRole = data?.role; // Extract user role from data (if applicable)

          state.user = { role: userRole }; // Update user object
          state.token = token;
          console.log('Login successful!', data);
          console.log('Authorization token:', token);
        })
        .catch((error) => {
          state.loading = false;
          state.error = error.message || 'Login failed';
          console.error('Login error:', error);
        });
    },
    logout(state) {
      state.user = null;
      state.token = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
