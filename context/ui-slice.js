import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
};

export const ui = createSlice({
  name: "ui",
  initialState,
  reducers: {
    modalReducer: (state, { payload }) => {
      state.modal = payload;
    },
  },
});

export const { modalReducer } = ui.actions;
export const selectedModal = state => state.ui.modal;
export default ui.reducer;
