import Navbar from "../components/header/Navbar";
import Head from "next/head";
import Image from "next/image";
import items from "../../data/payment.json"

export default function Payment({payment}) {
  return (
    <>
      <Head>
        <title>Golat Cafe: Payment</title>
        <meta name='description' content='Payment Method' />
        <link rel='icon' href='/coffee.ico' />
      </Head>
      <main>
      <div className='w-screen keen-slider__slide h-fit px-2 pt-10 flex justify-center'>
      <div className='rounded-md w-[100%] min-w-fit px-3 aspect-square relative bg-dairyCream flex flex-col items-center justify-end lg:pb-[8%] pb-4'>
        <div className='max-w-full hover:scale-110 duration-300 -top-10 absolute w-[70%]'>
          <Image alt={item.name} src={item.img} width={400} height={400} />
        </div>
        <h1 className='text-center font-bold xl:text-xl text-lg text-black mb-2'>
          {item.name}
        </h1>
        <div className='flex gap-6 text-sm justify-center mt-4'>
        </div>
      </div>
      </div>
        <h1 className='text-3xl font-semibold text-center mt-20'>
          PAYMENT METHOD
        </h1>
        <div class="card rounded-none">
        <Image width={100} alt='test' height={100} src='/product/c-americano.png' />
          halo
        </div>
      </main>
    </>
  );
}
