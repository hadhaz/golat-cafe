import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import cartReducer from "./cart-slice";
import reminderReducer from "./reminder-slice";
import memoReducer from "./memo-slice";
import reservationReducer from "./reservation-slice";
import uiReducer from "./ui-slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    reminder: reminderReducer,
    memo: memoReducer,
    reservation: reservationReducer,
    ui: uiReducer,
  },
});

export default store;
