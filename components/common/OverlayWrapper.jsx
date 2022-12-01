import { AnimatePresence, motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { confirmReducer, modalReducer } from "../../context/ui-slice";

export default function OverlayWrapper({ children, type }) {
  const dispatch = useDispatch();
  function closeHandler() {
    type === "confirm"
      ? dispatch(confirmReducer(false))
      : dispatch(modalReducer(false));
  }
  return (
    <>
      <motion.div
        onClick={closeHandler}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='w-screen h-screen flex items-center justify-center bg-whiteOverlay fixed top-0 z-20'
      ></motion.div>
      <div className='fixed w-[95%] md:w-auto z-20 min-w-fit left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'>
        {children}
      </div>
    </>
  );
}
