import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectedItems } from "../../context/memo-slice";
import OrderCard from "../card/OrderCard";
import Summary from "./Summary";
import db from "../../data/product.json";
import { selectedDraggableCart } from "../../context/cart-slice";

export default function DraggableCart() {
  const [oHeight, setOHeight] = useState(0);
  const [yPos, setYPos] = useState(0);
  const [count, setCount] = useState(0);
  const [loaded, setLoaded] = useState(0);
  const orderCardRef = useRef();
  const summaryRef = useRef();
  const items = useSelector(selectedItems);
  const isDraggableCartActive = useSelector(selectedDraggableCart);

  useEffect(() => {
    if (loaded) {
      setCount(1);
    }

    if (items.length === 0) {
      setCount(0);
    }
  }, [loaded, items.length]);

  useEffect(() => {
    setLoaded(true);
    setOHeight(orderCardRef?.current?.clientHeight || 0);
    setYPos(orderCardRef?.current?.clientHeight || 0);
  }, []);

  useEffect(() => {
    setOHeight(orderCardRef?.current?.clientHeight);
    setYPos(orderCardRef?.current?.clientHeight);
  }, [items]);

  console.log(count);

  return (
    <AnimatePresence>
      {items[0] && isDraggableCartActive && (
        <motion.div
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
            className='overflow-scroll overflow-x-hidden mt-3 rounded-md shadow-md h-[60vh] md:h-[50vh] lg:h-[40vh]'
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
