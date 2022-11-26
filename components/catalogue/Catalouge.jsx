import Carousel from "../carousel/Carousel";
import items from "../../data/product.json"

export default function Catalogue({title, desc, type}) {
  return (
    <section className=''>
      <h1 className='text-3xl lg:text-4xl xl:text-5xl font-semibold text-center mt-16 mb-2 xl:mb-3'>
        {title}
      </h1>
      <p className='text-center mb-8 text-base xl:text-lg'>
        {desc}
      </p>
      <Carousel items={items} type={type} />
    </section>
  );
}
