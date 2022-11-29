import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isReminder: false,
  isPopup: false,
  isClosed: false,
  firstOrder: true,
};

export const reminder = createSlice({
  name: "reminder",
  initialState,
  reducers: {
    popup: (state, action) => {
      state.isPopup = action.payload;
      if (!action.payload) state.isClosed = true;
    },
    remind: (state, action) => {
      state.isReminder = action.payload;
      state.isClosed = false;
    },
    setFirstOrder: (state, action) => {
      state.firstOrder = action.payload;
    },
  },
});

export const { popup, remind, setFirstOrder } = reminder.actions;
export const selectedPopup = state => state.reminder.isPopup;
export const selectedIsPopupClosed = state => state.reminder.isClosed;
export const selectedReminder = state => state.reminder.isReminder;
export const selectedFirstOrder = state => state.reminder.firstOrder;
export default reminder.reducer;
