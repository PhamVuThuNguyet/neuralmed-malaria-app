import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    setUserData(state, action) {
      return action.payload;
    },
    clearUserData(state) {
      return {};
    },
  },
});

export const { setUserData, clearUserData } = userSlice.actions;

export default userSlice.reducer;