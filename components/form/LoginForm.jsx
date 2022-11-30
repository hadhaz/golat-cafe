import Link from "next/link";
import Image from "next/image";

export default function LoginForm() {
  return (
    <div className="flex flex-row mt-20 max-w-7xl mx-auto">
      <div className="basis-1/2 shrink mx-auto">
        <Image width={1000} height={1000} src="/coffee-banner.jpg"></Image>
      </div>
      <div className="flex basis-1/2">
        <div className="w-full my-auto">
          <div className="px-20 py-5">
            <h1 className="font-bold text-5xl">Register</h1>
          </div>
          <form className="px-20 py-10">
            <div className="">
              <div className="py-1">
                <label for="username">Username</label>
              </div>
              <div>
                <input
                  className="bg-transparent w-full underline underline-offset-auto"
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Write your username here"
                />
              </div>
              <div className="py-2" />
              <div className="py-1">
                <label for="phone-number">Phone Number</label>
              </div>
              <div>
                <input
                  className="bg-transparent w-full"
                  type="number"
                  id="phone-number"
                  name="phone-number"
                  placeholder="ex: 0812345678910"
                />
              </div>
              <div className="py-2" />
              <div className="py-1">
                <label for="address">Address</label>
              </div>
              <div>
                <input
                  className="bg-transparent w-full"
                  type="text"
                  id="address"
                  name="address"
                  placeholder="ex: Pogung kidul No. 205"
                />
              </div>
              <div className="py-2" />
              <div className="py-1">
                <label for="password">Password</label>
              </div>
              <div>
                <input
                  className="bg-transparent w-full"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="minimum length 8 chararcters"
                />
              </div>
              <div className="py-2" />
              <div className="py-1">
                <label for="confirm-password">Confirm Password</label>
              </div>
              <div>
                <input
                  className="bg-transparent w-full"
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  placeholder="please write your password again here"
                />
              </div>
            </div>
            <div className="py-10"></div>
            <div className="">
              Already have an account?{" "}
              <Link className="text-mangoTango" href="/login">
                login
              </Link>{" "}
              now
            </div>
            <div className="my-2">
              <Link href="/reserve">
                <button className="w-44 h-10 bg-mangoTango hover:bg-[#e04609] font-medium">
                  Submit
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
