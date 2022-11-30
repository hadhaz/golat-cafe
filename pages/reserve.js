import { useState, useEffect } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/header/Navbar";
import { clearSaved, selectedOnBooking } from "../context/reservation-slice";
import ReserveModal from "../components/modal/ReserveModal";
import WarningLogin from "../components/modal/WarningLogin";
import { selectedModal } from "../context/ui-slice";
import Progress1 from "../components/reservation/Progress1";
import { AnimatePresence, MotionConfig } from "framer-motion";
import Progress2 from "../components/reservation/Progress2";
import { motion } from "framer-motion";

export default function Reserve() {
  const dispatch = useDispatch();
  const isOnBooking = useSelector(selectedOnBooking);
  const modal = useSelector(selectedModal);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(clearSaved());
  }, []);

  const next = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div className='max-h-screen max-w-screen overflow-hidden'>
      {modal && <WarningLogin />}
      <Head>
        <title>Golat Cafe: Reservation</title>
        <meta
          name='description'
          content='Reserve seats from our store to enjoy your life'
        />
        <link rel='icon' href='/coffee.ico' />
      </Head>
      <AnimatePresence>{page === 1 && <Progress1 next={next}/>}</AnimatePresence>

      <Navbar />
      {isOnBooking && <ReserveModal />}
    </div>
  );
}
