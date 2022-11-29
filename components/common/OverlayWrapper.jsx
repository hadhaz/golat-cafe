import { motion } from "framer-motion";

export default function OverlayWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='w-screen h-screen flex items-center justify-center bg-whiteOverlay fixed top-0 z-20'
    >
      {children}
    </motion.div>
  );
}
