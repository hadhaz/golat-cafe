import Image from "next/image";
import { useState } from "react";
import {
  addItem,
  removeItem,
  selectedDraggableCart,
  setItem,
} from "../../context/cart-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { saveItem, selectedItems } from "../../context/memo-slice";

export default function MenuCard({ item }) {
  const food = useSelector(selectedItems);
  const [cart, setCart] = useState(!!food[item.name]);
  const [quantity, setQuantity] = useState(food[item.name]);
  const dispatch = useDispatch();

  const formatter = Intl.NumberFormat("id-ID", {
    currency: "IDR",
    style: "currency",
  });

  const cartHandler = () => {
    setQuantity(food[item.name] + 1 || 1);
    dispatch(
      addItem({
        name: item.name,
        price: item.price,
      })
    );
    setCart(true);
    // setQuantity is asynchronous update, so we handle with + 1
    dispatch(saveItem({ [item.name]: 1 }));
  };

  const removeHandler = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
      dispatch(
        removeItem({
          name: item.name,
          price: item.price,
        })
      );
    } else {
      setCart(false);
      setQuantity(prev => prev - 1);
      dispatch(
        removeItem({
          name: item.name,
          price: item.price,
        })
      );
    }
    dispatch(saveItem({ [item.name]: quantity - 1 }));
  };

  const addHandler = () => {
    dispatch(
      addItem({
        name: item.name,
        price: item.price,
      })
    );
    setQuantity(prev => prev + 1);
    dispatch(saveItem({ [item.name]: quantity + 1 }));
  };

  return (
    <div className='w-screen keen-slider__slide h-fit px-2 pt-10 flex justify-center'>
      <div className='rounded-md w-[100%] min-w-fit px-3 aspect-square relative bg-dairyCream flex flex-col items-center justify-end lg:pb-[8%] pb-4'>
        <div className='max-w-full hover:scale-110 duration-300 -top-10 absolute w-[70%]'>
          <Image alt={item.name} src={item.img} width={400} height={400} />
        </div>
        <h1 className='text-center font-bold xl:text-xl text-lg text-black mb-2'>
          {item.name}
        </h1>
        <div className='flex gap-6 text-sm justify-center mt-4'>
          {!cart && (
            <button
              onClick={cartHandler}
              className='duration-200 bg-mangoTango hover:bg-mango text-white w-28 font-semibold py-2 rounded-sm'
            >
              Add to Cart
            </button>
          )}
          {cart && (
            <div className='rounded-sm flex justify-center py-1 duration-200 bg-mangoTango text-white w-28 font-semibold overflow-hidden'>
              <button
                className='bg-mangoTango basis-[30%] text-xl'
                onClick={removeHandler}
              >
                -
              </button>
              <div className='rounded-sm bg-mango py-[6px] basis-2/5 text-center'>
                {quantity}
              </div>
              <button
                className='bg-mangoTango basis-[30%] text-xl'
                onClick={addHandler}
              >
                +
              </button>
            </div>
          )}
          <div className='text-black flex items-center justify-center font-semibold'>
            {formatter.format(item.price)}
          </div>
        </div>
      </div>
    </div>
  );
}
