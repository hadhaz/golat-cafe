import { useSelector } from "react-redux";
import {
  selectedIdentity,
  selectedSavedReservation,
} from "../../context/reservation-slice";

export default function Summary() {
  const details = useSelector(selectedSavedReservation);
  const identity = useSelector(selectedIdentity);

  return (
    <div className='flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-[#e6e6e6] text-black pb-5 max-w-[65%] w-full rounded-md fixed'>
      <h1 className='text-center font-semibold text-xl mb-4 border-b-2 border-black py-4'>
        Reservation Invoice
      </h1>
      <section
        id='invoice'
        className='px-8 font-medium flex flex-col w-full gap-y-2'
      >
        <div className='flex gap-2'>
          <h3 className='w-full border basis-1/3 border-black px-1'>
            Booking Code:
          </h3>
          <p className='border border-black w-full px-2'>{details.id}</p>
        </div>
        <div className='flex gap-2'>
          <h3 className='w-full border basis-1/3 border-black px-1'>Name:</h3>
          <p className='border border-black w-full px-2'>{identity.name}</p>
        </div>
        <div className='flex gap-2'>
          <h3 className='w-full border basis-1/3 border-black px-1'>
            Phone Number:
          </h3>
          <p className='border border-black w-full px-2'>{identity.phone}</p>
        </div>

        <div className='flex gap-2'>
          <h3 className='w-full border basis-1/3 border-black px-1'>
            Order Date:
          </h3>
          <p className='border border-black w-full px-2'>{details.date}</p>
        </div>
        <div className='flex gap-2'>
          <h4 className='w-full border basis-1/3 border-black px-1'>
            Location:
          </h4>
          <p className='border border-black w-full px-2'>{details.location}</p>
        </div>
        <div className='flex gap-2'>
          <h4 className='w-full border basis-1/3 border-black px-1'>
            Seats Number:
          </h4>
          <p className='border border-black w-full px-2'>
            {details.seats.map(
              (item, idx) =>
                item.no + (idx === details.seats.length - 1 ? " " : ", ")
            )}
          </p>
        </div>
      </section>
      <button className='w-[85%] md:w-[75%] lg:w-60 hover:bg-deepOrange mt-5 bg-mangoTango text-white mx-auto rounded-md font-medium py-2 '>
        Order Food
      </button>
    </div>
  );
}
