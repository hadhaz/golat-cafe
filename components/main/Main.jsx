import Image from "next/image";
import Link from "next/link";
import CoffeeOverlay from "./Overlay";
import { motion } from "framer-motion";
import Floating from "./Floating";
import Catalogue from "../catalogue/Catalouge";

export default function Main() {
  return (
    <>
      <div className='relative max-w-7xl w-screen overflow-hidden mx-auto grid grid-cols-5'>
        <CoffeeOverlay />
        <section className='col-span-2 flex flex-col gap-y-8 p-6 px-12'>
          <div className='hover:bg-[#848e57] duration-300 cursor-pointer flex gap-1 bg-[#585E3E] w-fit px-4 font-semibold py-2 rounded-md'>
            <Image src='/coffee.svg' alt='coffee cup' width={20} height={20} />
            <p>Coffee Shop</p>
          </div>
          <h1 className='cursor-pointer hover:scale-105 duration-300 mt-3 text-5xl lg:text-7xl font-semibold max-w-[2/5vw]'>
            CODE, WORK & COFFEE
          </h1>
          <p className='w-[90%] lg:w-[75%] hover:scale-105 duration-300'>
            “Coworking is all about community, but I believe the
            &apos;work&apos; part of coworking should be as attractive as the
            &apos;co&apos; part.”
          </p>
          <Link href='/reserve'>
            <button className='bg-[#E07F09] hover:bg-[#e04609] duration-300 font-medium px-4 py-2 rounded-sm'>
              Reserve Now
            </button>
          </Link>
        </section>

        <div className='relative h-fit col-span-3 mb-24'>
          <Floating />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className='rounded-sm overflow-hidden relative w-1/2 mt-12'
          >
            <Image
              src='/coffee-banner.jpg'
              width={800}
              height={1200}
              alt='coffe 1'
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 1.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className='left-[35%] absolute w-[55%] -bottom-6  rounded-md overflow-hidden'
          >
            <Image
              src='/coffee-banner-2.jpg'
              width={800}
              height={400}
              alt='coffe 2'
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
