import Carousel from "../components/carousel/Carousel";
import items from "../data/product.json";
import Navbar from "../components/header/Navbar";
import BestSeller from "../components/catalogue/BestSeller";
import CoffeeOverlay from "../components/main/Overlay";

export default function Menu() {
  return (
    <>
      <CoffeeOverlay top={'100px'}/>
      <Navbar />
      <main className='flex flex-col gap-28'>
        <BestSeller />
        <section className=''>
          <h1 className='text-2xl lg:text-3xl xl:text-4xl font-semibold text-center mt-16 mb-2 xl:mb-3'>
            Coffee
          </h1>
          <p className='text-center mb-12 text-sm xl:text-base'>
            Most wanted food and drink
          </p>
          <Carousel items={items} type='coffee' />
        </section>
        <section>
          <h1 className='text-2xl lg:text-3xl xl:text-4xl font-semibold text-center mt-16 mb-2 xl:mb-3'>
            Non Coffee
          </h1>
          <p className='text-center mb-12 text-sm xl:text-base'>
            Most wanted food and drink
          </p>
          <Carousel items={items} type='non-coffee' />
        </section>
        <section className=''>
          <h1 className='text-2xl lg:text-3xl xl:text-4xl font-semibold text-center mt-16 mb-2 xl:mb-3'>
            Food
          </h1>
          <p className='text-center mb-12 text-sm xl:text-base'>
            Most wanted food and drink
          </p>
          <Carousel items={items} type='food' />
        </section>
      </main>
    </>
  );
}
