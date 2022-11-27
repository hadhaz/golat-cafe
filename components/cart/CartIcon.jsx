import { useState } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import {
  disableCart,
  onClick,
  selectedCumulativeQuantity,
} from "../../context/cart-slice";
import { selectedItems } from "../../context/memo-slice";

export default function CartIcon() {
  const [warning, setWarning] = useState(false);
  const quantity = useSelector(selectedCumulativeQuantity);
  const dispatch = useDispatch();

  const draggableHandler = () => {
    if (quantity > 0) {
      dispatch(onClick());
      dispatch(disableCart(false));
    } else {
      setWarning(true);
      setTimeout(() => setWarning(false), 1000);
    }
  };

  return (
    <>
      {warning && (
        <div className='absolute text-xs right-9 top-3 z-10 rounded-sm px-1 bg-red-400 text-black'>
          0 item
        </div>
      )}
      <div
        className='cursor-pointer relative p-2 rounded-full border w-fit ml-2'
        onClick={draggableHandler}
      >
        <Image src='/cart.svg' width={16} height={16} alt='Your Cart' />
        {quantity > 0 && (
          <div className='absolute -top-2 -right-2 font-medium bg-dairyCream w-3/5 text-center rounded-full text-black text-sm aspect-square'>
            {quantity}
          </div>
        )}
      </div>
    </>
  );
}
