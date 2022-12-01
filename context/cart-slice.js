import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
  quantityCum: 0,
  draggableOn: false,
  dontActive: false,
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
    setItem: (state, { payload }) => {},

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
    onClick: (state, { payload }) => {
      if (payload) {
        state.draggableOn = payload;
      } else {
        state.draggableOn = !state.draggableOn;
      }
    },
    disableCart: (state, { payload }) => {
      if (payload) {
        state.dontActive = payload;
      } else {
        state.dontActive = !state.draggableOn;
      }
    },
  },
});

export const selectedTotal = state => state.cart.total;
export const selectedCumulativeQuantity = state => state.cart.quantityCum;
export const selectedDraggableCart = state => state.cart.draggableOn;
export const selectedDontActive = state => state.cart.dontActive;
export const selectedFoods = state => ({
  total: state.cart.total,
  items: state.cart.items,
});
export const { addItem, removeItem, setItem, onClick, disableCart } =
  cart.actions;
export default cart.reducer;
