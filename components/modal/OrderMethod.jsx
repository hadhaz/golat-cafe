import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setFirstOrder } from "../../context/reminder-slice";
import { modalReducer, selectedModal } from "../../context/ui-slice";
import OverlayWrapper from "../common/OverlayWrapper";
import Image from "next/image";
import { setBooking } from "../../context/reservation-slice";

export default function OrderMethod() {
  const dispatch = useDispatch();
  const router = useRouter();
  const modalActive = useSelector(selectedModal);

  function handleDineIn() {
    dispatch(setFirstOrder(false));
    dispatch(modalReducer(false));
    router.push("/reserve");
  }
  function handleTakeAway() {
    dispatch(setFirstOrder(false));
    dispatch(modalReducer(false));
    router.push("/menu");
  }

  const closeHandler = () => {
    dispatch(modalReducer(false));
  };

  if (modalActive)
    return (
      <OverlayWrapper>
        <motion.div
          initial={{ y: "-100vw" }}
          animate={{ y: 0 }}
          className='bg-dairyCream rounded-md text-black font-medium py-10 px-16'
        >
          <h1 className='text-xl xl:text-2xl text-center font-semibold'>
            Choose Your Order Method
          </h1>
          <section className='flex flex-col md:flex-row justify-around mt-6 gap-6'>
            <button
              onClick={handleTakeAway}
              className='bg-mangoTango border-[3px] border-transparent hover:bg-deepOrange text-white w-40 py-1 rounded-md'
            >
              Take away
            </button>
            <button
              onClick={handleDineIn}
              className='border-[3px] cursor-pointer border-mangoTango w-40 rounded-md hover:bg-mangoTango hover:text-white'
            >
              Dine in
            </button>
          </section>
        </motion.div>
      </OverlayWrapper>
    );
}
