import React, { useState } from "react";
import Image from "next/image";
import { nextProgress } from "../../context/ui-slice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Payment() {
  const [paid, setPaid] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  
  const handleSimulate = () => {
    dispatch(nextProgress());
    setPaid(true);
    setTimeout(() => {
      router.push("/reservation");
    }, 3000);
  };

  
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      className='mx-auto max-w-7xl mt-28 '
    >
      <h2 className='text-center text-xl md:text-2xl font-semibold'>
        Scan this QRIS with your beloved e-wallet
      </h2>
      <div className='flex justify-center mt-12'>
        <div
          style={{ borderRadius: paid ? "100%" : "" }}
          className='border-2 p-1 border-dairyCream'
        >
          {!paid && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className='border-2 p-1 border-dairyCream'
            >
              <Image
                src='/payment/qris.svg'
                alt='qr-code'
                border='0'
                width={300}
                height={300}
              />
            </motion.div>
          )}
          {paid && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeIn" }}
            >
              <Image
                src='/checkmark.svg'
                width={300}
                height={300}
                alt='checkmark'
              />
            </motion.div>
          )}
        </div>
      </div>
      <button
        onClick={handleSimulate}
        className='text-xs bg-deepOrange rounded-sm'
      >
        Simulated Scan
      </button>
    </motion.div>
  );
}
