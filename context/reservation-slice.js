import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 0,
  fix: false,
  saved: {
    meta: [],
  },
  location: null,
  onBooking: false,
  dineIn: null,
  checkout: {
    name: null,
    phone: null,
    date: null,
    id: null,
    payment: null,
    notes: null,
  },
};

export const reservation = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    updateSeats: (state, { payload }) => {
      state.fix = false;
      state.seats[payload.col].items[payload.line][payload.idx].status =
        payload.status;
      const targetNo =
        state.seats[payload.col].items[payload.line][payload.idx].no;

      state.location = payload.location;
      if (payload.status === "chosen") {
        state.saved.meta.push({
          col: payload.col,
          line: payload.line,
          idx: payload.idx,
          no: targetNo,
        });
        state.total += 1;
      } else if (payload.status === "available") {
        state.saved.meta = state.saved.meta.filter(item => {
          return item.no !== targetNo;
        });

        state.total -= 1;
      }
    },
    initialize: (state, { payload }) => {
      state.fix = false;
      state.seats = payload.seats;
      state.location = payload.location;
      state.total = 0;
    },
    confirmOrder: state => {
      const date = new Date(Date.now());
      state.fix = true;
      state.checkout.id = Math.random().toString(36).slice(2);
      state.saved.meta.forEach(item => {
        state.seats[item.col].items[item.line][item.idx].status = "booked";
      });
      state.checkout.date = date.toLocaleString();
    },
    checkout: (state, { payload }) => {
      state.checkout.name = payload.name;
      state.checkout.phone = payload.phone;
      state.checkout.notes = payload.notes;
      state.checkout.payment = payload.payment;
    },
    setBooking: (state, { payload }) => {
      state.onBooking = payload;
    },
    clearSaved: state => {
      state.saved.meta = [];
    },
    updateLocation: (state, { payload }) => {
      state.location = payload;
    },
    updateDineIn: (state, { payload }) => {
      state.dineIn = payload;
    },
  },
});

export const selectedSeats = state => state.reservation.seats;
export const selectedIdentity = state => ({
  name: state.reservation.name,
  phone: state.reservation.phone,
});
export const selectedOnBooking = state => state.reservation.onBooking;
export const selectedFixOrder = state => state.reservation.fix;
export const selectedTotalBooking = state => state.reservation.total;
export const selectedLocation = state => state.reservation.location;
export const selectedSavedReservation = state => ({
  seats: state.reservation.saved?.meta,
  location: state.reservation?.location,
  ...state.reservation.checkout,
});
export const selectedDineIn = state => state.reservation.dineIn;

export const {
  initialize,
  updateSeats,
  confirmOrder,
  checkout,
  setBooking,
  clearSaved,
  updateLocation,
  updateDineIn,
} = reservation.actions;
export default reservation.reducer;
