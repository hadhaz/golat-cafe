import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  items: [],
};

export const memo = createSlice({
  name: "memo",
  initialState,
  reducers: {
    saveItem: (state, { payload }) => {
      const target = state.items.find(item => item.name === payload.name);
      if (target) {
        if (payload.quantity > 0) target.quantity = payload.quantity;
        else state.items = state.items.filter(item => item.name !== payload.name)
      } else {
        state.items.push(payload);
      }
    },
  },
});

export const selectedItems = state => state.memo.items;
export const { saveItem } = memo.actions;
export default memo.reducer;