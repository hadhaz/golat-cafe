import Navbar from "../components/header/Navbar";
import Head from "next/head";

export default function Reserve() {
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
        <h1 className='w-full text-center font-semibold text-2xl lg:text-3xl'>
          CHOOSE YOUR SEATS
        </h1>
        <select
          name='outlet'
          id='outlet'
          className='bg-mangoTango px-3 font-medium rounded-md w-fit py-1'
        >
          <option value='gmc'>Foodcourt GMC</option>
          <option value='komipa'>Komipa UGM</option>
          <option value='sardjito'>Sardjito Food Corner</option>
        </select>
        <div className='max-w-[90%] z-10 relative grid grid-cols-7 mt-6 gap-4'>
          <div className='col-span-6 bg-[#585E3E] h-[460px] rounded-md'></div>
          <div className='col-span-1 bg-slate-800 font-medium h-fit w-fit py-6 flex items-start flex-col gap-y-3 px-8 justify-center rounded-md text-sm'>
            <div className='flex gap-2 items-center'>
              <div className='bg-grayAvailable w-8 h-8 rounded-md'></div>
              <div>Available</div>
            </div>
            <div className='flex gap-2 items-center'>
              <div className='bg-greenOrange w-8 h-8 rounded-md'></div>
              <div>Chosen</div>
            </div>
            <div className="flex gap-2 items-center">
              <div className='bg-rifleGreen w-10 h-8 rounded-md'></div>
              <div>Not Available</div>
            </div>
          </div>
        </div>
        <button className="bg-mangoTango min-w-[180px] py-[6px] font-medium rounded-md mt-5 w-fit self-center">Confirm (3)</button>
      </main>
    </>
  );
}