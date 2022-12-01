import { useSelector, useDispatch } from "react-redux";
import { forwardRef, useState, useEffect, useRef } from "react";
import Image from "next/image";
import { selectedItems } from "../../context/memo-slice";
import { AnimatePresence, motion } from "framer-motion";
import { confirmOrder, updateDineIn } from "../../context/reservation-slice";
import {
  disableToggleCart,
  nextProgress,
  toggleCart,
} from "../../context/ui-slice";
import Router, { useRouter } from "next/router";

const Summary = forwardRef((props, ref) => {
  const router = useRouter();
  const items = useSelector(selectedItems);
  const dineInRef = useRef();
  const dineIn = useSelector(state => state.reservation.dineIn);
  const formatter = Intl.NumberFormat("id-ID", {
    currency: "IDR",
    style: "currency",
  });
  const [info, setInfo] = useState(true);
  let sum = 0;

  items.forEach(val => {
    sum += val.quantity * val.price;
  });

  const dispatch = useDispatch();
  const closeHandler = () => {
    dispatch(toggleCart());
    dispatch(disableToggleCart(true));
  };

  useEffect(() => {
    setTimeout(() => {
      setInfo(false);
    }, 3000);
    return () => {
      clearTimeout(
        setTimeout(() => {
          setInfo(false);
        }, 3000)
      );
    };
  }, []);

  const checkoutHandler = () => {
    if (router.pathname === "/menu") {
      router.push("/reservation");
    }
    dispatch(confirmOrder(true));
    dispatch(nextProgress(2));
  };

  const infoStartHandler = () => {
    setInfo(true);
  };

  const infoEndHandler = () => {
    setInfo(false);
  };

  const confirmHandler = () => {
    router.push("/reservation");
    dispatch(confirmOrder(true));

    if (dineInRef.current.value === "takeaway") {
      dispatch(updateDineIn(false));
      dispatch(nextProgress(2));
    } else {
      dispatch(updateDineIn(true));
    }
  };

  return (
    <div className='flex flex-col items-center' ref={ref}>
      <AnimatePresence>
        {info && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='absolute w-fit right-0 -top-5 bg-mango px-1 rounded-md text-sm'
          >
            Drag this card to expand and collapse
          </motion.div>
        )}
      </AnimatePresence>
      <div className='flex justify-center relative w-full'>
        <motion.div
          onHoverEnd={infoEndHandler}
          onHoverStart={infoStartHandler}
          className='h-[5px] w-16 bg-slate-300 my-2 rounded-md'
        ></motion.div>
        <div className='absolute right-4 mt-1 flex gap-3'>
          <button onClick={closeHandler}>
            <Image src='/close.svg' alt='collapse' width={20} height={20} />
          </button>
        </div>
      </div>

      <div className='flex justify-around w-full py-8'>
        <div className='text-xl font-semibold flex gap-y-3 flex-col'>
          <h4>Subtotal:</h4>
          {dineIn === null && (
            <select
              ref={dineInRef}
              name='method'
              id='method'
              className='outline-none rounded-sm text-slate-800 px-1 py-[1px] text-base bg-mango font-medium'
              defaultValue={dineIn ? "dine-in" : "takeaway"}
            >
              <option value='takeaway'>Takeaway</option>
              <option value='dinein'>Dine In</option>
            </select>
          )}
        </div>
        <p>{formatter.format(sum)}</p>
      </div>
      {dineIn !== null && (
        <button
          onClick={checkoutHandler}
          className='bg-mangoTango rounded-md w-fit px-10 py-[6px] text-white font-semibold hover:bg-[#e04609]'
        >
          Checkout
        </button>
      )}
      {dineIn === null && (
        <button
          onClick={confirmHandler}
          className='bg-mangoTango rounded-md w-fit px-10 py-[6px] text-white font-semibold hover:bg-[#e04609]'
        >
          Confirm
        </button>
      )}
    </div>
  );
});

Summary.displayName = "Summary";
export default Summary;
