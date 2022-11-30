export default function Legend() {
  return (
    <div className='col-span-3 md:col-span-1 bg-slate-800 font-medium h-fit w-fit py-6 flex items-start flex-col gap-y-3 px-8 justify-center rounded-md text-sm'>
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
  );
}
