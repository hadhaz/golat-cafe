import Image from "next/image";

const Cart = () => {
  return (
    <div className='relative p-2 rounded-full border w-fit '>
      <Image src='/cart.svg' width={20} height={20} alt='Your Cart' />
      <div className='absolute -top-2 -right-2 font-medium bg-dairyCream w-3/5 text-center rounded-full text-black text-sm aspect-square'>
        1
      </div>
    </div>
  );
};

export default Cart;
