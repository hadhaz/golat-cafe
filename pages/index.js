import Head from "next/head";
import BestSeller from "../components/catalogue/BestSeller";
import Navbar from "../components/header/Navbar";
import Main from "../components/main/Main";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <>
      <Head>
        <title>Galat Cafe</title>
        <meta
          name='description'
          content='Galat Cafe, Co-working Space, and Live Music'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Main />
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: "-30vh", opacity: 0 }}
        exit={{ y: "-50vh" }}
      >
        <BestSeller />
      </motion.div>
      <Link href='/menu'>
        <div className='hover:scale-125 w-fit mx-auto duration-200 text-center cursor-pointer font-semibold my-10 text-lg lg:text-xl xl:text-2xl'>
          Find More...
        </div>
      </Link>
    </>
  );
}
