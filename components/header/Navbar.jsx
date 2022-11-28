import Link from "next/link";
import Image from "next/image";
import CartIcon from "../cart/CartIcon";
import { useSelector } from "react-redux";
import { selectedCart } from "../../context/cart-slice";

const Navbar = () => {
  return (
    <header className='w-full fixed bg-rifleGreen left-1/2 -translate-x-1/2 z-10 bg- mx-auto max-w-7xl flex justify-between items-center px-10 py-3'>
      <h1>
        <Link href='/'>
          <Image
            alt='logo galat cafe'
            src='/logo.svg'
            width={100}
            height={50}
          />
        </Link>
      </h1>
      <nav>
        <ul className='justify-center flex gap-6 text-sm'>
          <Link href='/store'>
            <li>Find Store</li>
          </Link>
          <Link href='/reserve'>
            <li>Reserve</li>
          </Link>
          <Link href='/menu'>
            <li>Catalogue</li>
          </Link>
          <Link href='/delivery'>
            <li>Delivery</li>
          </Link>
        </ul>
      </nav>
      <div className='flex gap-2 items-center'>
        <Link href='/auth/login'>
          <button>Login</button>
        </Link>
        <div>|</div>
        <Link href='/auth/register'>
          <button>Register</button>
        </Link>
        <CartIcon />
      </div>
    </header>
  );
};

export default Navbar;
