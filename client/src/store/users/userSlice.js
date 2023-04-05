import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData(state, action) {
      state = action.payload
      return state;
    },
    clearUserData(state) {
      return {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserData, clearUserData } = userSlice.actions;

export default userSlice.reducer;
