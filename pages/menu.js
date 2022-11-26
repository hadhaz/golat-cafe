import Navbar from "../components/header/Navbar";
import BestSeller from "../components/catalogue/BestSeller";
import CoffeeOverlay from "../components/main/Overlay";
import Catalogue from "../components/catalogue/Catalouge";
import { motion } from "framer-motion";

export default function Menu() {
  return (
    <>
      <CoffeeOverlay top={"100px"} />
      <Navbar />
      <main className='flex flex-col xl:gap-12 lg:gap-4 pt-16'>
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
            transition={{delay: 0.3, duration: 0.3, type: "spring", stiffness: 90, damping: 11}}
          >
            <Catalogue title={item.title} desc={item.desc} type={item.type} />
          </motion.div>
        ))}
      </main>
    </>
  );
}

const menus = [
  { title: "Coffee", desc: "Most wanted coffee", type: "coffee" },
  { title: "Non-Coffee", desc: "Most wanted drink", type: "non-coffee" },
  { title: "Food", desc: "Most wanted food", type: "food" },
];
