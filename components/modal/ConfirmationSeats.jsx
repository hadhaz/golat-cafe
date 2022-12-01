import { useDispatch } from "react-redux";
import { updateDineIn } from "../../context/reservation-slice";
import { nextProgress } from "../../context/ui-slice";
import { spreader } from "../../utils/array-spread";
import OverlayWrapper from "../common/OverlayWrapper";

export default function ConfirmationSeats({ seats, location }) {
  const dispatch = useDispatch();
  const seatList = spreader(seats);
  const nextHandler = () => {
    dispatch(nextProgress());
    dispatch(updateDineIn(true))
  };
  return (
    <OverlayWrapper type='confirm'>
      <div className='rounded-md gap-y-2 flex flex-col bg-dairyCream text-slate-900 px-16 py-6'>
        <h1 className='text-lg lg:text-xl font-semibold'>CONFIRMATION SEATS</h1>
        <section className='text-sm md:text-base'>
          <p>Seats Number: {seatList} </p>
          <p>Locations: {location}</p>
        </section>
        <button
          onClick={nextHandler}
          className='roPunded-sm text-white bg-mangoTango font-medium py-1 mt-2'
        >
          Confirm
        </button>
      </div>
    </OverlayWrapper>
  );
}
