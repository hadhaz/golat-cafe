import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="mx-auto max-w-7xl flex justify-between items-center px-10 py-4">
      <h1>
        <Image alt="logo galat cafe" src='/logo.svg' width={100} height={50}/>
      </h1>
      <nav>
        <ul className="justify-center flex gap-6 text-sm">
          <Link href='/store'>
            <li>Find Store</li>
          </Link>
          <Link href='/reserve'>
            <li>Reserve</li>
          </Link>
          <Link href='/#best-seller'>
            <li>Catalogue</li>
          </Link>
          <Link href='/delivery'>
            <li>Delivery</li>
          </Link>
        </ul>
      </nav>
      <div className="flex gap-2">
        <button>Login</button>
        <div>|</div>
        <button>Register</button>
      </div>
    </header>
  );
};

export default Navbar;
