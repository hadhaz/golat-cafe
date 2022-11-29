import Navbar from "../components/header/Navbar";
import BestSeller from "../components/catalogue/BestSeller";
import CoffeeOverlay from "../components/main/Overlay";
import Catalogue from "../components/catalogue/Catalouge";
import { AnimatePresence, motion } from "framer-motion";
import DraggableCart from "../components/cart/DraggableCard";
import { useSelector } from "react-redux";
import { selectedDraggableCart } from "../context/cart-slice";
import Reminder from "../components/modal/Reminder";
import Head from "next/head";

export default function Menu() {
  const cart = useSelector(selectedDraggableCart);
  return (
    <>
      <Head>
        <title>Golat Cafe: Food Menus</title>
        <meta
          name='description'
          content='Golat Cafe Foods & Drink Menus'
        />
        <link rel='icon' href='/coffee.ico' />
      </Head>
      <main className='flex flex-col xl:gap-12 lg:gap-4 pt-16 mb-12'>
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: "30vh", opacity: 0 }}
        >
          <BestSeller />
        </motion.div>
        {menus.map(item => (
          <motion.div
            key={item.title}
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: "-70vw", opacity: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.3,
              type: "spring",
              stiffness: 90,
              damping: 11,
            }}
          >
            <Catalogue title={item.title} desc={item.desc} type={item.type} />
          </motion.div>
        ))}
      </main>
      <AnimatePresence>{cart && <DraggableCart />}</AnimatePresence>
    </>
  );
}

const menus = [
  { title: "Coffee", desc: "Most wanted coffee", type: "coffee" },
  { title: "Non-Coffee", desc: "Most wanted drink", type: "non-coffee" },
  { title: "Food", desc: "Most wanted food", type: "food" },
];
