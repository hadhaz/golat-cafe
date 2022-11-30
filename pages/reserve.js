import Navbar from "../components/header/Navbar";
import Head from "next/head";
import { Gmc, Sardjito, Komipa } from "../components/maps";
import { useDispatch, useSelector } from "react-redux";
import {
  clearSaved,
  selectedFixOrder,
  selectedLocation,
  selectedOnBooking,
  selectedTotalBooking,
  setBooking,
} from "../context/reservation-slice";
import ReserveModal from "../components/modal/ReserveModal";
import TimeOption from "../components/common/TimeOption";
import LocationOption from "../components/common/LocationOption";
import Legend from "../components/common/Legend";
import WarningLogin from "../components/modal/WarningLogin";
import { selectedModal } from "../context/ui-slice";
import { motion } from "framer-motion";
import { useEffect } from "react";

let LocationMap;

export default function Reserve() {
  const dispatch = useDispatch();
  const totalBooking = useSelector(selectedTotalBooking);
  const isConfirmed = useSelector(selectedFixOrder);
  const isOnBooking = useSelector(selectedOnBooking);
  const location = useSelector(selectedLocation);
  const modal = useSelector(selectedModal);

  const confirmHandler = () => {
    if (totalBooking === 0) {
      alert("Please Order");
      return;
    }
    dispatch(setBooking(true));
  };

  if (location === "GMC") {
    LocationMap = <Gmc />;
  } else if (location === "SARDJITO") {
    LocationMap = <Sardjito />;
  } else {
    LocationMap = <Komipa />;
  }

  useEffect(() => {
    dispatch(clearSaved());
  }, []);

  return (
    <>
      {modal && <WarningLogin />}
      <Head>
        <title>Golat Cafe: Reservation</title>
        <meta
          name='description'
          content='Reserve seats from our store to enjoy your life'
        />
        <link rel='icon' href='/coffee.ico' />
      </Head>
      <Navbar />
      <motion.main
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        className='mt-24 mb-12 mx-auto max-w-7xl px-10 flex flex-col'
      >
        <h1 className='w-full mb-6 text-center font-semibold text-2xl lg:text-3xl'>
          CHOOSE YOUR SEATS
        </h1>
        <LocationOption />
        <TimeOption />
        <div className='max-w-[90%] z-10 relative grid grid-cols-7 mt-6 gap-4'>
          <div className='col-span-6 bg-[#f5f5f5] py-[5vw] px-[6vw] rounded-md'>
            {LocationMap}
          </div>
          <Legend />
        </div>
        <button
          onClick={confirmHandler}
          disabled={totalBooking === 0}
          className='bg-mangoTango min-w-[180px] disabled:bg-slate-300 disabled:text-black disabled:cursor-not-allowed py-[6px] font-medium rounded-md mt-5 w-fit self-center'
        >
          {isConfirmed
            ? "OK"
            : `Confirm ${totalBooking > 0 ? "(" + totalBooking + ")" : ""}`}
        </button>
      </motion.main>
      {isOnBooking && <ReserveModal />}
    </>
  );
}
