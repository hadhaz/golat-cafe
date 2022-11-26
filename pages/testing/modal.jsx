export default function Modal() {
  return (
    <div className="w-screen h-screen bg-whiteOverlay flex justify-center items-center fixed">
      <div className='bg-dairyCream shadow-lg shadow-black text-black w-fit py-10 flex flex-col items-center justify-center'>
        <h1 className='font-semibold text-lg xl:text-2xl lg:text-xl'>
          Don&apos;t you want to reserve a seat first?
        </h1>
        <p className='max-w-[75%] text-center my-2'>
          this prevents you from running out of seats even if you have ordered
          food
        </p>
        <div className='flex my-4 gap-6 border-2 w-full font-medium justify-center'>
          <button className='w-1/3 py-2 bg-mangoTango text-white border-[3px] border-transparent'>
            Yes, please
          </button>
          <button className='w-2/5 py-2 border-[3px] border-mangoTango'>
            Remind me later
          </button>
        </div>
        <div className='cursor-pointer underline-offset-2 underline lg:text-base text-sm'>
          No Thanks
        </div>
      </div>
    </div>
  );
}
