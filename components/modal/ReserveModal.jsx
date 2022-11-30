import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useDispatch} from "react-redux";
import {
  addIdentity,
  confirmOrder,
  setBooking,
} from "../../context/reservation-slice";
import Image from "next/image";

export default function ReserveModal() {
  const [method, setMethod] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLoginMethod = () => {
    dispatch(setBooking(false));
    router.push("auth/login");
  };

  const handlePhoneMethod = () => {
    setMethod("phone");
  };

  const closeHandler = () => {
    dispatch(setBooking(false));
  };


  return (
    <div className='w-screen h-screen z-50 bg-whiteOverlay flex justify-center items-center fixed top-0'>
      {!method && (
        <div className='relative rounded-md bg-dairyCream px-12 shadow-lg text-black w-fit py-10 flex flex-col items-center justify-center'>
          <div
            onClick={closeHandler}
            className='absolute top-1 right-2 cursor-pointer'
          >
            <Image src='/close.svg' alt='close' width={20} height={20} />
          </div>
          <h1 className='font-semibold text-lg xl:text-2xl lg:text-xl'>
            Choose Your Booking Method
          </h1>
          <p className='text-sm mb-4'>Login for more flexibility order</p>
          <div className='flex mt-4 gap-6 w-full font-medium justify-center'>
            <button
              onClick={handleLoginMethod}
              className='w-1/2 bg-mangoTango rounded-sm hover:bg-deepOrange text-center text-white border-[3px] border-transparent duration-300'
            >
              Login
            </button>

            <button
              onClick={handlePhoneMethod}
              className='w-1/2 py-1  border-[3px] rounded-sm border-mangoTango hover:bg-mango duration-300'
            >
              Number Phone
            </button>
          </div>
        </div>
      )}
      {method === "phone" && <PhoneMethod />}
    </div>
  );
}

const PhoneMethod = () => {
  const phoneRef = useRef();
  const nameRef = useRef();
  const dispatch = useDispatch();
  const router = useRouter();

  const submitHandler = e => {
    e.preventDefault();
    dispatch(confirmOrder());
    dispatch(
      addIdentity({
        name: nameRef.current.value,
        phone: phoneRef.current.value,
      })
    );
    dispatch(setBooking(false));
    router.push("order");
  };

  const closeHandler = () => {
    dispatch(setBooking(false));
  };

  return (
    <form
      onSubmit={submitHandler}
      className='bg-dairyCream relative px-12 shadow-lg shadow-black text-black w-fit py-10 flex flex-col items-center justify-center'
    >
      <div
        onClick={closeHandler}
        className='absolute top-1 right-2 cursor-pointer'
      >
        <Image src='/close.svg' alt='close' width={20} height={20} />
      </div>
      <h1 className='font-semibold text-lg xl:text-2xl lg:text-xl'>
        Reservation Form
      </h1>
      <div className='flex flex-col gap-2 mt-4'>
        <input
          ref={nameRef}
          type='text'
          className='p-1 outline-none '
          placeholder='Name'
        />
        <input
          ref={phoneRef}
          type='text'
          className='p-1 outline-none '
          placeholder='Phone Number'
        />
      </div>
      <button
        className='mt-4 bg-mangoTango hover:bg-deepOrange font-medium text-white px-4 rounded-md py-1'
        type='submit'
      >
        Submit
      </button>
    </form>
  );
};
