import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default auth.reducer;