import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
  confirmation: false,
  progress: 1,
  cart: false,
  disableToggleCart: false,
};

export const ui = createSlice({
  name: "ui",
  initialState,
  reducers: {
    modalReducer: (state, { payload }) => {
      state.modal = payload;
    },
    confirmReducer: (state, { payload }) => {
      state.confirmation = payload;
    },
    nextProgress: state => {
      state.progress = state.progress + 1;
    },
    resetProgress: state => {
      state.progress = 1;
    },
    toggleCart: (state, { payload }) => {
      if (state.disableToggleCart) return;
      if (payload) {
        state.cart = payload;
        return;
      }
      state.cart = !state.cart;
    },
    disableToggleCart: (state, { payload }) => {
      state.disableToggleCart = payload;
    },
  },
});

export const {
  modalReducer,
  confirmReducer,
  nextProgress,
  resetProgress,
  disableToggleCart,
  toggleCart,
} = ui.actions;

export const selectedModal = state => state.ui.modal;
export const selectedConfirm = state => state.ui.confirmation;
export const selectedProgress = state => state.ui.progress;
export const selectedCartUI = state => state.ui.cart;
export const selectedDisableToggleCart = state => state.ui.disableToggleCart;
export default ui.reducer;
