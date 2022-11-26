import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reminder: false,
  popup: false,
};

export const reminder = createSlice({
  name: "reminder",
  initialState,
  reducers: {
    popup: (state, action) => {
      state.popup = action.payload;
    },
    reminder: (state, action) => {
      state.reminder = action.payload;
    },
  },
});

export default reminder.reducer;
