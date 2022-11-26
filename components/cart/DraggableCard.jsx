import { motion, useMotionValue } from "framer-motion";
import { forwardRef, useEffect, useRef, useState } from "react";
import OrderCard from "../card/OrderCard";

export default function DraggableCart() {
  const [oHeight, setOHeight] = useState(0);
  const [loaded, setLoaded] = useState(0);
  const orderCardRef = useRef();

  useEffect(() => {
    setLoaded(true);
    setOHeight(orderCardRef.current.clientHeight);
  }, []);

  return (
    <motion.div
      drag='y'
      initial={{ x: "-50%", y: "100vh" }}
      animate={{ y: oHeight }}
      exit={{ x: "-50%", y: "80vh" }}
      dragConstraints={{ bottom: oHeight + 138, top: 0 }}
      transition={{duration: 0.3, type:"spring", stiffness: 90, damping: 10}}
      className='text-black max-w-[500px] w-full left-1/2 -translate-x-1/2 fixed bg-white rounded-md bottom-0'
    >
      <Summary />
      <div
        ref={orderCardRef}
        className='overflow-scroll mt-3 rounded-md shadow-md max-h-[40vh]'
      >
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </motion.div>
  );
}

const Summary = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='h-[5px] w-16 bg-slate-300 my-2 rounded-md'></div>
      <div className='flex justify-around w-full py-8'>
        <h3 className='text-xl font-semibold'>Subtotal:</h3>
        <p>Rp60.000</p>
      </div>
      <button className='bg-mangoTango rounded-md w-fit px-10 py-[6px] text-white font-semibold hover:bg-[#e04609]'>
        Checkout
      </button>
    </div>
  );
};
