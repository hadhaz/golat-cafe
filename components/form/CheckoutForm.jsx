import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { checkout } from "../../context/reservation-slice";
import { useRouter } from "next/router";
import { nextProgress } from "../../context/ui-slice";

export default function CheckoutForm() {
  const dispatch = useDispatch();
  const nameRef = useRef();
  const phoneRef = useRef();
  const paymentRef = useRef();
  const notesRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      checkout({
        name: nameRef.current.value,
        phone: phoneRef.current.value,
        payment: paymentRef.current.value,
        notes: notesRef.current.value,
      })
    );

    dispatch(nextProgress());
  };
  return (
    <motion.form
      onSubmit={handleSubmit}
      animate={{ x: 0 }}
      initial={{ x: "-100vw" }}
      className='mx-3 max-w-7xl mb-8 md:mx-auto mt-24 flex flex-col items-center justify-center'
    >
      <h1 className='text-xl md:text-2xl xl:text-4xl font-semibold lg:font-bold text-center'>
        CHECKOUT FORM
      </h1>
      <div className='flex flex-col gap-y-2 lg:w-[70%] w-full mt-8'>
        <label htmlFor='name'>Customer Name</label>
        <input
          type='text'
          ref={nameRef}
          id='name'
          name='name'
          className='outline-none py-2 px-4 bg-whiteOverlay text-white'
          required
        />
      </div>
      <div className='flex flex-col gap-y-2 lg:w-[70%] mt-4 w-full'>
        <label htmlFor='numberPhone'>Customer Number Phone</label>
        <input
          id='numberPhone'
          ref={phoneRef}
          name='numberPhone'
          type='text'
          required
          className='outline-none py-2 px-4 bg-whiteOverlay text-white'
        />
      </div>
      <div className='flex flex-col gap-y-2 lg:w-[70%] mt-4 w-full'>
        <label htmlFor='payment'>Payment Method</label>
        <select
          defaultValue='food'
          required
          ref={paymentRef}
          className='outline-none font-medium py-2 px-4 bg-whiteOverlay text-white'
        >
          <option value='qris'>QRIS</option>
          <option value='debit'>Debit/Credit Card</option>
          <option value='Cash'>Cash</option>
        </select>
      </div>
      <div className='flex flex-col gap-y-2 lg:w-[70%] mt-4 w-full'>
        <label htmlFor='numberPhone'>Additional Notes</label>
        <textarea
          id='numberPhone'
          name='numberPhone'
          ref={notesRef}
          type='text'
          className='outline-none min-h-[200px] py-2 px-4 bg-whiteOverlay text-white'
        />
      </div>
      <button className='bg-mangoTango mt-6 px-8 hover:bg-deepOrange py-2 font-medium rounded-md'>
        Submit Order
      </button>
    </motion.form>
  );
}
