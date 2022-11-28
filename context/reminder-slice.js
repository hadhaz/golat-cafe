import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isReminder: false,
  isPopup: false,
  isClosed: false,
};

export const reminder = createSlice({
  name: "reminder",
  initialState,
  reducers: {
    popup: (state, action) => {
      state.isPopup = action.payload;
    },
    remind: (state, action) => {
      state.isReminder = action.payload;
    },
    close: (state, action) => {
      state.isClosed = action.payload;
    },
  },
});

export const { popup, remind, close } = reminder.actions;
export const selectedPopup = state => state.reminder.isPopup;
export const selectedIsPopupClosed = state => state.reminder.isClosed;
export const selectedReminder = state => state.reminder.isReminder;
export default reminder.reducer;