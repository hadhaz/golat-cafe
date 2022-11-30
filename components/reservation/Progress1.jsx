import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import LocationOption from "../common/LocationOption";
import TimeOption from "../common/TimeOption";
import Legend from "../common/Legend";
import { Gmc, Sardjito, Komipa } from "../maps";
import {
  selectedFixOrder,
  selectedLocation,
  selectedTotalBooking,
} from "../../context/reservation-slice";

let LocationMap;

export default function Progress1({ next }) {
  const isConfirmed = useSelector(selectedFixOrder);
  const location = useSelector(selectedLocation);
  const totalBooking = useSelector(selectedTotalBooking);

  const confirmHandler = () => {
    if (totalBooking === 0) {
      alert("Please Order");
      return;
    }
    next();
  };

  if (location === "GMC") {
    LocationMap = <Gmc />;
  } else if (location === "SARDJITO") {
    LocationMap = <Sardjito />;
  } else {
    LocationMap = <Komipa />;
  }
  return (
    <motion.main
      initial={{ y: "-95vh" }}
      animate={{ y: 0 }}
      exit={{ y: "95vh" }}
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
  );
}
