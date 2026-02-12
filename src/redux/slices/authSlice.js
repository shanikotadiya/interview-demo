import { createSlice } from '@reduxjs/toolkit';
import { AUTH_TOKEN_KEY } from '../../constants/config.js';

const tokenFromStorage =
  typeof window !== 'undefined' ? localStorage.getItem(AUTH_TOKEN_KEY) : null;

const initialState = {
  user: null,
  token: tokenFromStorage
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials(state, action) {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    clearAuth(state) {
      state.user = null;
      state.token = null;
    }
  }
});

export const { setCredentials, setUser, clearAuth } = authSlice.actions;

export default authSlice.reducer;

