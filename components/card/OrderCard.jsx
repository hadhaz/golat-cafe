import Image from "next/image";
import React, { forwardRef } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../context/cart-slice";
import { saveItem } from "../../context/memo-slice";

const OrderCard = ({ price, name, quantity, img }) => {
  const dispatch = useDispatch();
  const formatter = Intl.NumberFormat("id-ID", {
    currency: "IDR",
    style: "currency",
  });
  const addHandler = () => {
    dispatch(addItem({ name, price }));
    dispatch(saveItem({ name, quantity: quantity + 1, price }));
  };
  const removeHandler = () => {
    dispatch(removeItem({ name, price }));
    dispatch(saveItem({ name, quantity: quantity - 1, price }));
  };

  return (
    <div className='grid grid-cols-4 rounded-md my-5 w-fit min-w-[80%] py-2 mx-auto shadow-md'>
      <div className='col-span-1 flex items-center justify-center'>
        <Image src={img} width={80} height={80} alt={name} />
      </div>
      <div className='col-span-3 flex flex-col ml-10 justify-center h-20'>
        <h3 className='text-lg font-medium mb-1'>{name}</h3>
        <div className='flex gap-5 items-center '>
          <div>{formatter.format(price)}</div>
          <div className='flex rounded-md overflow-hidden bg-mangoTango text-white font-medium'>
            <div
              className='w-8 py-1 text-center hover:bg-[#e04609]'
              onClick={removeHandler}
            >
              -
            </div>
            <div className='w-4 py-1 text-center'>{quantity}</div>
            <div
              className='w-8 py-1 text-center  hover:bg-[#e04609]'
              onClick={addHandler}
            >
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
