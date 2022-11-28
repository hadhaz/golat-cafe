import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: null,
  seats: [],
  total: 0,
};

export const reservation = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    updateSeats: (state, { payload }) => {
      state.seats[payload.col].items[payload.line][payload.idx].status =
        payload.status;
      state.location = payload.location;
      if (payload.status === "chosen") state.total += 1;
      else if (payload.status === "chosen") state.total -= 1;
    },
    initialize: (state, { payload }) => {
      state.seats = payload.seats;
      state.location = payload.location;
    },
  },
});

export const selectedSeats = state => state.reservation.seats;
export const selectedTotalBooking = state => state.reservation.total;
export const selectedLocation = state => state.reservation.location;
export const { initialize, updateSeats } = reservation.actions;
export default reservation.reducer;
