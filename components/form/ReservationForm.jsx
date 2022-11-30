import React from "react";

export default function ReservationForm() {
  return (
    <form className='max-w-7xl mx-auto mt-24'>
      <h1 className='text-xl md:text-2xl xl:text-4xl font-semibold lg:font-bold text-center'>
        RESERVATION FORM
      </h1>
      <div className='flex flex-col gap-y-2 lg:w-[70%] w-full mt-8'>
        <label htmlFor='name'>Customer Name</label>
        <input
          type='text'
          id='name'
          name='name'
          className='outline-none py-2 px-4 bg-whiteOverlay text-white'
          required
        />
      </div>
      <div className='flex flex-col gap-y-2 lg:w-[70%] mt-4 w-full'>
        <label htmlFor='numberPhone'>Customer Number Phone</label>
        <input
          id='numberPhone'
          name='numberPhone'
          type='text'
          required
          className='outline-none py-2 px-4 bg-whiteOverlay text-white'
        />
      </div>
      <div className='flex flex-col gap-y-2 lg:w-[70%] mt-4 w-full'>
        <label htmlFor='payment'>Payment Method</label>
        <select
          defaultValue='food'
          required
          className='outline-none font-medium py-2 px-4 bg-whiteOverlay text-white'
        >
          <option value='gopay'>Gopay</option>
          <option value='ovo'>Ovo</option>
          <option value='shopeePay'>Shopee Pay</option>
          <option value='debit'>Debit/Credit Card</option>
          <option value='food'>Order Food (free reservation fee)</option>
        </select>
      </div>
      <div className='flex flex-col gap-y-2 lg:w-[70%] mt-4 w-full'>
        <label htmlFor='numberPhone'>Additional Notes</label>
        <textarea
          id='numberPhone'
          name='numberPhone'
          type='text'
          className='outline-none min-h-[200px] py-2 px-4 bg-whiteOverlay text-white'
        />
      </div>
    </form>
  );
}
