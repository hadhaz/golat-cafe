import { useDispatch } from "react-redux";
import { clearCart } from "../context/cart-slice";
import { clearMemo } from "../context/memo-slice";
import { clearReminder } from "../context/reminder-slice";
import {
  clearReservationState,
  
} from "../context/reservation-slice";
import { clearUIstate } from "../context/ui-slice";

export default function useCleaner() {
  const dispatch = useDispatch();
  return () => {
    dispatch(clearCart());
    dispatch(clearReservationState());
    dispatch(clearMemo());
    dispatch(clearReminder());
    dispatch(clearUIstate());
  };
}
