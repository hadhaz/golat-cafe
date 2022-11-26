import Head from "next/head";
import BestSeller from "../components/catalogue/BestSeller";
import Navbar from "../components/header/Navbar";
import Main from "../components/main/Main";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import DraggableCart from "../components/cart/DraggableCard";
import { useSelector } from "react-redux";
import { selectedDraggableCart } from "../context/cart-slice";

export default function Home() {
  const draggableCartActive = useSelector(selectedDraggableCart);

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
      <AnimatePresence>
        {draggableCartActive && <DraggableCart />}
      </AnimatePresence>
    </>
  );
}
