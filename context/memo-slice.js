import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  items: {},
};

export const memo = createSlice({
  name: "memo",
  initialState,
  reducers: {
    saveItem: (state, { payload }) => {
      state.items = {
        ...state.items,
        ...payload,
      };
    },
  },
});

export const selectedItems = state => state.memo.items;
export const { saveItem } = memo.actions;
export default memo.reducer;
