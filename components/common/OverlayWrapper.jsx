import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { modalReducer } from "../../context/ui-slice";

export default function OverlayWrapper({ children }) {
  const dispatch = useDispatch();
  function closeHandler() {
    dispatch(modalReducer(false));
  }
  return (
    <>
      <motion.div
        onClick={closeHandler}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='w-screen h-screen flex items-center justify-center bg-whiteOverlay fixed top-0 z-20'
      ></motion.div>
      <div className='fixed z-20 min-w-fit w-full flex justify-center top-1/2 -translate-y-1/2'>
        {children}
      </div>
    </>
  );
}
