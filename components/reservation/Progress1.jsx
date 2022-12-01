import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import LocationOption from "../common/LocationOption";
import TimeOption from "../common/TimeOption";
import Legend from "../common/Legend";
import { Gmc, Sardjito, Komipa } from "../maps";
import {
  selectedFixOrder,
  selectedLocation,
  selectedSavedReservation,
  selectedTotalBooking,
} from "../../context/reservation-slice";
import ConfirmationSeats from "../modal/ConfirmationSeats";
import { selectedModal, modalReducer, selectedConfirm, confirmReducer } from "../../context/ui-slice";

let LocationMap;

export default function Progress1() {
  const isConfirmed = useSelector(selectedFixOrder);
  const location = useSelector(selectedLocation);
  const totalBooking = useSelector(selectedTotalBooking);
  const { seats } = useSelector(selectedSavedReservation);
  const confirm = useSelector(selectedConfirm);
  const dispatch = useDispatch();

  const confirmHandler = () => {
    if (totalBooking === 0) {
      alert("Please Order");
      return;
    }
    dispatch(confirmReducer(true));
  };

  if (location === "GMC") {
    LocationMap = <Gmc />;
  } else if (location === "SARDJITO") {
    LocationMap = <Sardjito />;
  } else {
    LocationMap = <Komipa />;
  }
  return (
    <>
      {confirm && <ConfirmationSeats location={location} seats={seats} />}
      <motion.main
        initial={{ x: "-95vw" }}
        animate={{ x: 0 }}
        exit={{ x: "95vw" }}
        className='mt-24 mb-12 mx-auto max-w-7xl px-10 flex flex-col'
      >
        <h1 className='w-full mb-6 text-center font-semibold text-2xl lg:text-3xl'>
          CHOOSE YOUR SEATS
        </h1>
        <LocationOption />
        <TimeOption />
        <div className='max-w-[90%] z-10 relative grid grid-cols-7 mt-6 gap-4'>
          <div className='col-span-7 md:col-span-6 overflow-x-scroll bg-[#f5f5f5] py-[5vw] px-[6vw] rounded-md'>
            {LocationMap}
          </div>
          <Legend />
        </div>
        <button
          onClick={confirmHandler}
          disabled={totalBooking === 0}
          className='hover:bg-deepOrange bg-mangoTango w-full min-w-[180px] disabled:bg-slate-300 disabled:text-black disabled:cursor-not-allowed py-[6px] font-medium rounded-md mt-5 md:w-fit self-center'
        >
          {isConfirmed
            ? "OK"
            : `Select ${totalBooking} seat${totalBooking > 1 ? "s" : ""}`}
        </button>
      </motion.main>
    </>
  );
}
