import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectedItems } from "../../context/memo-slice";
import OrderCard from "../card/OrderCard";
import Summary from "./Summary";
import db from "../../data/product.json";

export default function DraggableCart() {
  const [oHeight, setOHeight] = useState(0);
  const [yPos, setYPos] = useState(0);
  const [loaded, setLoaded] = useState(0);
  const orderCardRef = useRef();
  const summaryRef = useRef();
  const items = useSelector(selectedItems);

  useEffect(() => {
    setLoaded(true);
    setOHeight(orderCardRef?.current?.clientHeight || 0);
    setYPos(orderCardRef?.current?.clientHeight || 0);
  }, []);

  useEffect(() => {
    setOHeight(orderCardRef?.current?.clientHeight);
  }, [items]);

  console.log(oHeight, yPos);

  return (
    <AnimatePresence>
      {items[0] && <motion.div
        drag='y'
        initial={{ x: "-50%", y: "100vh" }}
        animate={{ y: yPos, x: "-50%" }}
        exit={{ x: "-50%", y: "80vh" }}
        dragConstraints={{
          bottom: oHeight + (items.length - 1) + 135,
          top: 0,
        }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 40,
          damping: 10,
        }}
        className='text-black max-w-[500px] w-full left-1/2 -translate-x-1/2 fixed bg-white rounded-md bottom-0'
      >
        <Summary ref={summaryRef} />
        <div
          ref={orderCardRef}
          className='overflow-scroll h-fit overflow-x-hidden mt-3 rounded-md shadow-md max-h-[60vh] md:max-h-[50vh] lg:max-h-[40vh]'
        >
          {items.map(item => {
            const { img } = db.find(el => el.name === item.name);
            return (
              <OrderCard
                price={item.price}
                quantity={item.quantity}
                name={item.name}
                key={item.name}
                img={img}
              />
            );
          })}
        </div>
      </motion.div>}
    </AnimatePresence>
  );
}
