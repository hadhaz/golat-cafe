import { createSlice } from "@reduxjs/toolkit";

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
        target.img = payload.img
        if (payload.quantity > 0) target.quantity = payload.quantity;
        else state.items = state.items.filter(item => item.name !== payload.name)
      } else {
        console.log(payload)
        state.items.push(payload);
      }
    },
  },
});

export const selectedItems = state => state.memo.items;
export const selectedImage = state => state.memo.Image;
export const { saveItem } = memo.actions;
export default memo.reducer;
