import BestSeller from "../components/catalogue/BestSeller";
import Main from "../components/main/Main";
import Link from "next/link";
import { motion } from "framer-motion";
import DraggableCart from "../components/cart/DraggableCard";

export default function Home() {
  return (
    <>
      <Main />
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{delay: 0.5}}>
        <BestSeller />
      </motion.div>
      <Link href='/menu'>
        <div className='hover:scale-125 w-fit mx-auto duration-200 text-center cursor-pointer font-semibold my-10 text-lg lg:text-xl xl:text-2xl'>
          Find More...
        </div>
      </Link>
      <DraggableCart />
    </>
  );
}
