import OverlayWrapper from "../common/OverlayWrapper";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { modalReducer } from "../../context/ui-slice";
import { useRouter } from "next/router";

export default function WarningLogin() {
  const dispatch = useDispatch();
  const router = useRouter();
  const loginHandler = () => {
    router.push("/auth/login");
    dispatch(modalReducer(false));
  };
  const rejectHandler = () => {
    dispatch(modalReducer(false));
  };

  return (
    <>
      <div
        onClick={rejectHandler}
        className='w-screen h-screen bg-whiteOverlay fixed z-20'
      ></div>
      <motion.div
        initial={{ y: "-100vw" }}
        animate={{ y: 0 }}
        className='bg-red-400 fixed z-40 top-1 right-1 max-w-64 font-medium text-black py-4 px-6 rounded-md'
      >
        <h1 className='xl:text-lg 2xl:text-xl text-center text-white'>
          This feature is only available for logged in users
        </h1>
      </motion.div>
    </>
  );
}
