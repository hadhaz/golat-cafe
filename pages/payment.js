import Navbar from "../components/header/Navbar";
import Head from "next/head";
import Image from "next/image";

export default function payment() {
  return (
    <>
      <Head>
        <title>Golat Cafe: Payment</title>
        <meta
          name='description'
          content='Payment Method'
        />
        <link rel='icon' href='/coffee.ico' />
      </Head>
      <main>
        <h1 className='text-3xl font-semibold text-center mt-20'>PAYMENT METHOD</h1>
        <Image width={100} height={100}src='/product/c-americano.png'/>
      </main>
    </>
    );
}
