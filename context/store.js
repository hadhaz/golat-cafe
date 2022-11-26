import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import authReducer from "./auth-slice";
import cartReducer from "./cart-slice";
import reminderReducer from "./reminder-slice";
import memoReducer from "./memo-slice";

export const store = () =>
  configureStore({
    reducer: {
      auth: authReducer,
      cart: cartReducer,
      reminder: reminderReducer,
      memo: memoReducer,
    },
  });

export const wrapper = createWrapper(store);
