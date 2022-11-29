import { useState } from "react";
import Navbar from "../components/header/Navbar";
import Head from "next/head";
import Komipa from "../components/maps/Komipa";
import Gmc from "../components/maps/Gmc";
import Sardjito from "../components/maps/Sardjito";
import { useDispatch, useSelector } from "react-redux";
import {
  initialize,
  selectedFixOrder,
  selectedOnBooking,
  selectedTotalBooking,
  setBooking,
} from "../context/reservation-slice";
import ReserveModal from "../components/modal/ReserveModal";
import { generate } from "../utils/seatGenerator";

export default function Reserve() {
  const [loc, setLoc] = useState();
  const dispatch = useDispatch();
  const totalBooking = useSelector(selectedTotalBooking);
  const isConfirmed = useSelector(selectedFixOrder);
  const isOnBooking = useSelector(selectedOnBooking);

  const locHandler = e => {
    setLoc(e.target.value);
  };

  const confirmHandler = () => {
    if (totalBooking === 0) {
      alert("Please Order");
      return;
    }
    dispatch(setBooking(true));
  };

  const timeHandler = () => {
    const req =
      loc === "GMC"
        ? [
            { cols: 2, len: 5 },
            { cols: 1, len: 8 },
            { cols: 1, len: 8 },
            { cols: 2, len: 5 },
          ]
        : loc === "SARDJITO"
        ? [
            { cols: 2, len: 4 },
            { cols: 2, len: 4 },
            { cols: 2, len: 4 },
            { cols: 2, len: 4 },
          ]
        : [
            { cols: 3, len: 5 },
            { cols: 3, len: 3 },
            { cols: 2, len: 4 },
            { cols: 2, len: 4 },
          ];

    const data = generate(req);

    dispatch(initialize({ seats: data, location: loc }));
  };

  let LocationMap;
  if (loc === "GMC") {
    LocationMap = <Gmc />;
  } else if (loc === "SARDJITO") {
    LocationMap = <Sardjito />;
  } else {
    LocationMap = <Komipa />;
  }

  return (
    <>
      <Head>
        <title>Golat Cafe: Reservation</title>
        <meta
          name='description'
          content='Reserve seats from our store to enjoy your life'
        />
        <link rel='icon' href='/coffee.ico' />
      </Head>
      <Navbar />
      <main className='pt-20 mx-auto max-w-7xl px-10 flex flex-col'>
        <h1 className='w-full mb-6 text-center font-semibold text-2xl lg:text-3xl'>
          CHOOSE YOUR SEATS
        </h1>
        <select
          onChange={locHandler}
          defaultValue='KOMIPA'
          name='outlet'
          id='outlet'
          className='bg-mangoTango px-3 font-medium rounded-md w-fit py-1'
        >
          <option value='GMC'>Foodcourt GMC</option>
          <option value='KOMIPA'>Komipa UGM</option>
          <option value='SARDJITO'>Sardjito Food Corner</option>
        </select>
        <select
          onChange={timeHandler}
          defaultValue='9'
          name='time'
          id='time'
          className='bg-mango outline-none text-black mt-2 px-3 font-medium rounded-md w-fit py-1'
        >
          <option value='9'>09.00 - 10.00</option>
          <option value='10'>10.00 - 11.00</option>
          <option value='11'>11.00 - 12.00</option>
          <option value='12'>12.00 - 13.00</option>
          <option value='13'>13.00 - 14.00</option>
          <option value='14'>14.00 - 15.00</option>
        </select>
        <div className='max-w-[90%] z-10 relative grid grid-cols-7 mt-6 gap-4'>
          <div className='col-span-6 bg-[#f5f5f5] py-[5vw] px-[6vw] rounded-md'>
            {LocationMap}
          </div>
          <div className='col-span-1 bg-slate-800 font-medium h-fit w-fit py-6 flex items-start flex-col gap-y-3 px-8 justify-center rounded-md text-sm'>
            <div className='flex gap-2 items-center'>
              <div className='bg-grayAvailable w-8 h-8 rounded-md'></div>
              <div>Available</div>
            </div>
            <div className='flex gap-2 items-center'>
              <div className='bg-[#03fc35] w-8 h-8 rounded-md'></div>
              <div>Chosen</div>
            </div>
            <div className='flex gap-2 items-center'>
              <div className='bg-red-500 w-8 h-8 rounded-md'></div>
              <div>Booked</div>
            </div>
          </div>
        </div>
        <button
          onClick={confirmHandler}
          style={{
            background: isConfirmed ? "rgb(226 232 240)" : "rgb(224 127 9)",
            color: isConfirmed ? "#000" : "inherit",
          }}
          className='bg-mangoTango min-w-[180px] py-[6px] font-medium rounded-md mt-5 w-fit self-center'
        >
          {isConfirmed ? "OK" : `Confirm (${totalBooking})`}
        </button>
      </main>
      {isOnBooking && <ReserveModal />}
    </>
  );
}
