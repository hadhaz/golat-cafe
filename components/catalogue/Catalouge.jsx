import Carousel from "../carousel/Carousel";
import items from "../../data/product.json"

export default function Catalogue({title, desc, type}) {
  return (
    <section className=''>
      <h1 className='text-2xl hover:scale-110 duration-200 lg:text-3xl xl:text-4xl font-semibold text-center mt-16 mb-2 xl:mb-3'>
        {title}
      </h1>
      <p className='text-center hover:scale-105 duration-200 mb-8 text-sm xl:text-base'>
        {desc}
      </p>
      <Carousel items={items} type={type} />
    </section>
  );
}
