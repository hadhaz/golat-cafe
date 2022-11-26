import Image from "next/image";
import React, { forwardRef } from "react";

const OrderCard = () => {
  return (
    <div
      className='grid grid-cols-4 rounded-md my-5 w-fit min-w-[80%] py-2 mx-auto shadow-md'
    >
      <div className='col-span-1 flex items-center justify-center'>
        <Image
          src='/product/c-americano.png'
          width={80}
          height={80}
          alt='americano'
        />
      </div>
      <div className='col-span-3 flex flex-col ml-10 justify-center h-20'>
        <h3 className='text-lg font-medium mb-1'>Americano Coffee</h3>
        <div className='flex gap-5 items-center '>
          <div>Rp24.000</div>
          <div className='flex rounded-md bg-mangoTango text-white font-medium'>
            <div className='w-8 py-1 text-center'>-</div>
            <div className='w-4 py-1 text-center'>9</div>
            <div className='w-8 py-1 text-center'>+</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
