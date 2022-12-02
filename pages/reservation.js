import { useState, useEffect } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/header/Navbar";
import {
  clearSaved,
  selectedOnBooking,
  updateDineIn,
} from "../context/reservation-slice";
import ReserveModal from "../components/modal/ReserveModal";
import WarningLogin from "../components/modal/WarningLogin";
import { selectedModal, selectedProgress } from "../context/ui-slice";
import Progress1 from "../components/reservation/Progress1";
import { AnimatePresence, MotionConfig } from "framer-motion";
import Progress2 from "../components/reservation/Progress2";
import { useRouter } from "next/router";
import Progress3 from "../components/reservation/Progress3";
import Progress4 from "../components/reservation/Progress4";

export default function Reserve() {
  const dispatch = useDispatch();
  const isOnBooking = useSelector(selectedOnBooking);
  const modal = useSelector(selectedModal);
  const progress = useSelector(selectedProgress);

  useEffect(() => {
    if (progress === 1) {
      dispatch(clearSaved());
    }
  }, []);

  return (
    <div className='max-w-screen overflow-hidden'>
      {modal && <WarningLogin />}
      <Head>
        <title>Golat Cafe: Reservation</title>
        <meta
          name='description'
          content='Reserve seats from our store to enjoy your life'
        />
        <link rel='icon' href='/coffee.ico' />
      </Head>
      <AnimatePresence>
        {progress === 1 && <Progress1 />}
        {progress === 2 && <Progress2 />}
        {progress === 3 && <Progress3 />}
        {progress === 4 && <Progress4 />}
      </AnimatePresence>
      <Navbar />
      {isOnBooking && <ReserveModal />}
    </div>
  );
}
