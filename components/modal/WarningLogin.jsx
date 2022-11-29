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
    <OverlayWrapper>
      <motion.div
        initial={{ y: "-100vw" }}
        animate={{ y: 0 }}
        className='bg-dairyCream font-medium text-black py-10 px-12 rounded-md'
      >
        <h1 className='text-2xl xl:text-3xl mb-8 text-center'>
          Please, Login to get more seats
        </h1>
        <div className='flex justify-around gap-6'>
          <button
            onClick={loginHandler}
            className='bg-mangoTango border-[3px] border-transparent hover:bg-deepOrange text-white w-40 py-1 rounded-md'
          >
            Login
          </button>
          <button
            onClick={rejectHandler}
            className='border-[3px] border-mangoTango w-40 rounded-md hover:bg-mango'
          >
            No, thanks
          </button>
        </div>
      </motion.div>
    </OverlayWrapper>
  );
}
