import Image from "next/image";
import { useSelector } from "react-redux";
import { selectedCumulativeQuantity } from "../../context/cart-slice";

export default function CartIcon() {
  const quantity = useSelector(selectedCumulativeQuantity);

  return (
    <div className='relative p-2 rounded-full border w-fit ml-2'>
      <Image src='/cart.svg' width={16} height={16} alt='Your Cart' />
      {quantity > 0 && <div className='absolute -top-2 -right-2 font-medium bg-dairyCream w-3/5 text-center rounded-full text-black text-sm aspect-square'>
        {quantity}
      </div>}
    </div>
  );
}
