import { useSelector, useDispatch } from "react-redux";
import { disableCart, onClick } from "../../context/cart-slice";
import { forwardRef, useState, useEffect } from "react";
import Image from "next/image";
import { selectedItems } from "../../context/memo-slice";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const Summary = forwardRef((props, ref) => {
  const items = useSelector(selectedItems);
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
    dispatch(onClick());
    dispatch(disableCart(true));
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

  const infoStartHandler = () => {
    setInfo(true);
  };

  const infoEndHandler = () => {
    setInfo(false);
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
        <h3 className='text-xl font-semibold'>Subtotal:</h3>
        <p>{formatter.format(sum)}</p>
      </div>
      <Link href='/payment'>
        <button className='bg-mangoTango rounded-md w-fit px-10 py-[6px] text-white font-semibold hover:bg-[#e04609]'>
          Checkout
        </button>
      </Link>
    </div>
  );
});

Summary.displayName = "Summary";
export default Summary;
