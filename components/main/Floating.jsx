import Image from "next/image";
import { motion } from "framer-motion";

export default function Floating() {
  return (
    <div className='hidden md:flex absolute left-[38%] md:left-[42%] translate-x-1/2 top-[15%] md:top-[22%] lg:top-1/4 -translate-y-[5vw] flex-col gap-1 w-fit'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className=' flex items-center gap-3 font-medium hover:scale-105 duration-300 my-1'
      >
        <div className='bg-white max-w-[30px] md:max-w-full w-fit rounded-full'>
          <Image src='/love.svg' width={40} height={40} alt='built with love' />
        </div>
        <p className="text-sm md:text-base">Serve with love</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.2 }}
        className='relative left-[14px] md:left-5 w-[3px] h-3 bg-[rgba(255,255,255,.65)]'
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.2 }}
        className='relative left-[14px] md:left-5 w-[3px] h-3 bg-[rgba(255,255,255,.65)]'
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.9, duration: 0.2 }}
        className='hidden md:flex relative left-[14px] md:left-5 w-[3px] h-3 bg-[rgba(255,255,255,.65)]'
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1, duration: 0.5 }}
        className='flex items-center gap-3 font-medium hover:scale-105 duration-300 my-1'
      >
        <div className='max-w-[30px] md:max-w-full bg-white w-fit rounded-full'>
          <Image
            src='/price-tag.svg'
            width={40}
            height={40}
            alt='built with love'
          />
        </div>
        <p className="text-sm md:text-base">Affordable Price</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.6, duration: 0.2 }}
        className='relative left-[14px] md:left-5 w-[3px] h-3 bg-[rgba(255,255,255,.65)]'
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8, duration: 0.2 }}
        className='relative left-[14px] md:left-5 w-[3px] h-3 bg-[rgba(255,255,255,.65)]'
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.2 }}
        className='hidden md:block relative left-[14px] md:left-5 w-[3px] h-3 bg-[rgba(255,255,255,.65)]'
      ></motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 0.5 }}
        className='flex items-center gap-3 font-medium hover:scale-105 duration-300 my-1'
      >
        <div className='bg-white max-w-[30px] md:max-w-full w-fit rounded-full'>
          <Image
            src='/coffee-cup.svg'
            width={40}
            height={40}
            alt='built with love'
          />
        </div>

        <p className="text-sm md:text-base">Relax & Enjoy</p>
      </motion.div>
      
    </div>
  );
}
