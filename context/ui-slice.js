import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
  confirm: false,
  progress: 1,
};

export const ui = createSlice({
  name: "ui",
  initialState,
  reducers: {
    modalReducer: (state, { payload }) => {
      state.modal = payload;
    },
    confirmReducer: (state, { payload }) => {
      state.confirm = payload;
    },
    nextProgress: state => {
      state.progress = state.progress + 1;
    },
    resetProgress: state => {
      state.progress = 1;
    },
  },
});

export const { modalReducer, confirmReducer, nextProgress, resetProgress } = ui.actions;
export const selectedModal = state => state.ui.modal;
export const selectedConfirm = state => state.ui.confirm;
export const selectedProgress = state => state.ui.progress;
export default ui.reducer;
