import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUser: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.user = { name: "mashood ali" };
      state.isAuthenticated = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getUser } = authSlice.actions;

export default authSlice.reducer;
