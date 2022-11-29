import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import {
  selectedIdentity,
  selectedSavedReservation,
} from "../../context/reservation-slice";

export default function Summary() {
  const details = useSelector(selectedSavedReservation);
  const identity = useSelector(selectedIdentity);

  return (
    <div className='top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-dairyCream text-black py-5 max-w-[55%] rounded-md fixed'>
      <h1 className='text-center font-semibold text-xl mb-4'>
        Reservation Invoice
      </h1>
      <section className='px-8 font-medium'>
        <div className='flex gap-2'>
          <h3>Name:</h3>
          <p>{identity.name}</p>
        </div>
        <div className='flex gap-2'>
          <h3>Phone Number:</h3>
          <p>{identity.phone}</p>
        </div>
        <div className='flex gap-2'>
          <h3>Booking Code:</h3>
          <p>{details.id}</p>
        </div>
        <div className='flex gap-2'>
          <h3>Order Date:</h3>
          <p>{details.date}</p>
        </div>
        <div className='flex gap-2'>
          <h4>Location:</h4>
          <p>{details.location}</p>
        </div>
        <div>
          <h4>Seats Number:</h4>
          <div className='flex flex-col'>
            {details.seats.map(item => (
              <p key={nanoid()}>- {item.no}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
