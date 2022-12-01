import Link from "next/link";
import Image from "next/image";
import CartIcon from "../cart/CartIcon";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { selectedProgress } from "../../context/ui-slice";
import { selectedFixOrder } from "../../context/reservation-slice";

const Navbar = () => {
  const router = useRouter();
  const fixOrder = useSelector(selectedFixOrder);

  const homeHandler = () => {
    router.push("/");
  };

  return (
    <>
      <header className='w-full top-0 fixed bg-rifleGreen rounded-b-lg shadow-lg left-1/2 -translate-x-1/2 z-20 bg- mx-auto max-w-7xl flex flex-wrap justify-between items-center px-10 py-3'>
        <h1>
          <div onClick={homeHandler}>
            <Image
              alt='logo galat cafe'
              src='/logo.svg'
              width={100}
              height={50}
            />
          </div>
        </h1>
        <nav className='hidden md:block'>
          <ul className='justify-center flex gap-6 text-sm'>
            <Link href='/store'>
              <li>Our Store</li>
            </Link>

            <Link href='/menu'>
              <li>Catalogue</li>
            </Link>
            <li>FAQ</li>
          </ul>
        </nav>
        {!fixOrder && (
          <div className='gap-2 items-center flex'>
            <Link href='/auth/login' className='hidden md:block'>
              <button>Login</button>
            </Link>
            <CartIcon />
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
