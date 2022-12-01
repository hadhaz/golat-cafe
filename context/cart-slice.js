import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
  quantityCum: 0,
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      const target = state.items.find(item => item.name === payload.name);
      if (!target) {
        state.items.push({
          name: payload.name,
          quantity: 1,
          price: payload.price,
        });
      } else {
        target.quantity += 1;
      }

      state.total = state.total + payload.price;
      state.quantityCum += 1;
    },
    removeItem: (state, { payload }) => {
      const target = state.items.find(item => item.name === payload.name);

      if (!target) return;

      if (target.quantity > 1) {
        target.quantity -= 1;
        state.total = state.total - payload.price;
      } else {
        state.items = state.items.filter(item => item.name !== payload.name);
      }
      state.quantityCum -= 1;
    },
    clearCart: state => {
      state.items = [];
      state.total = 0;
      state.quantityCum = 0;
    },
  },
});

export const selectedTotal = state => state.cart.total;
export const selectedCumulativeQuantity = state => state.cart.quantityCum;
export const selectedFoods = state => ({
  total: state.cart.total,
  items: state.cart.items,
});
export const { addItem, removeItem, setItem, clearCart } = cart.actions;
export default cart.reducer;
