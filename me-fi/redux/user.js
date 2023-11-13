
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'Guest',
  },
  reducers: {
    // login will take a username and set it as the user's name
    login: (state, action) => {
      state.name = action.payload;
    },
    logout: (state) => {
      state.name = 'Guest';
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
