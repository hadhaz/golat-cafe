import Image from "next/image";
import { useState } from "react";
import { addItem, onClick, removeItem } from "../../context/cart-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { saveItem, selectedItems } from "../../context/memo-slice";

export default function MenuCard({ item }) {
  const food = useSelector(selectedItems);
  const { quantity } = food.find(({ name }) => name === item.name) || {
    quantity: 0,
  };
  const [cart, setCart] = useState(quantity > 0);
  const dispatch = useDispatch();
  const dontActive = useSelector(state => state.cart.dontActive);

  const formatter = Intl.NumberFormat("id-ID", {
    currency: "IDR",
    style: "currency",
  });

  const cartHandler = () => {
    dispatch(
      addItem({
        name: item.name,
        price: item.price,
      })
    );
    setCart(true);

    if (!dontActive) dispatch(onClick(true));
    
    // setQuantity is asynchronous update, so we handle with + 1
    dispatch(
      saveItem({
        name: item.name,
        quantity: 1,
        price: item.price,
      })
    );
  };

  const removeHandler = () => {
    if (quantity > 1) {
      dispatch(
        removeItem({
          name: item.name,
          price: item.price,
        })
      );
    } else {
      setCart(false);
      dispatch(
        removeItem({
          name: item.name,
          price: item.price,
        })
      );
    }
    dispatch(
      saveItem({ name: item.name, quantity: quantity - 1, price: item.price })
    );
  };

  const addHandler = () => {
    dispatch(
      addItem({
        name: item.name,
        price: item.price,
      })
    );
    dispatch(
      saveItem({ name: item.name, quantity: quantity + 1, price: item.price })
    );
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
          {quantity === 0 && (
            <button
              onClick={cartHandler}
              className='duration-200 bg-mangoTango hover:bg-mango text-white w-28 font-semibold py-2 rounded-sm'
            >
              Add to Cart
            </button>
          )}
          {quantity > 0 && (
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
