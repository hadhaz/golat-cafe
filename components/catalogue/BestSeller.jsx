import Carousel from "../carousel/Carousel";
import items from "../../data/product.json"

export default function BestSeller() {
  return (
    <section>
      <h1 className='text-2xl lg:text-3xl xl:text-4xl font-semibold text-center mt-16 mb-2 xl:mb-3'>
        BEST SELLER
      </h1>
      <p className='text-center mb-12 text-sm xl:text-base'>
        Most wanted food and drink
      </p>
      <Carousel items={items} type='coffee' />
    </section>
  );
}
