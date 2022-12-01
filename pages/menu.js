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
import { useRouter } from "next/router";

export default function Menu() {
  const cart = useSelector(selectedDraggableCart);
  const router = useRouter();
  const path = router.pathname;
  console.log(path)

  const animate = path === "/menu" ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 };
  const initial =
    path === "/menu" ? { y: 100, opacity: 0 } : { x: '-100vh', opacity: 0 };

  return (
    <>
      <Head>
        <title>Golat Cafe: Food Menus</title>
        <meta name='description' content='Golat Cafe Foods & Drink Menus' />
        <link rel='icon' href='/coffee.ico' />
      </Head>
      <motion.main
        animate={animate}
        initial={initial}
        className='flex flex-col xl:gap-12 lg:gap-4 pt-16 mb-12'
      >
        <motion.div>
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
      </motion.main>
      <AnimatePresence>{cart && <DraggableCart />}</AnimatePresence>
    </>
  );
}

const menus = [
  { title: "Coffee", desc: "Most wanted coffee", type: "coffee" },
  { title: "Non-Coffee", desc: "Most wanted drink", type: "non-coffee" },
  { title: "Food", desc: "Most wanted food", type: "food" },
];
