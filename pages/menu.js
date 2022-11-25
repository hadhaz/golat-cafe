import Carousel from "../components/carousel/Carousel";

const items = [{}, {}, {}, {}];

export default function Menu() {
  return (
    <main className='flex flex-col gap-28'>
      <section>
        <h1 className='text-2xl lg:text-3xl xl:text-4xl font-semibold text-center mt-16 mb-2 xl:mb-3'>
          BEST SELLER
        </h1>
        <p className='text-center mb-12 text-sm xl:text-base'>
          Most wanted food and drink
        </p>
        <Carousel items={items} />
      </section>
      <section className=''>
        <h1 className='text-2xl lg:text-3xl xl:text-4xl font-semibold text-center mt-16 mb-2 xl:mb-3'>
          Coffee
        </h1>
        <p className='text-center mb-12 text-sm xl:text-base'>
          Most wanted food and drink
        </p>
        <Carousel items={items} />
      </section>
      <section>
        <h1 className='text-2xl lg:text-3xl xl:text-4xl font-semibold text-center mt-16 mb-2 xl:mb-3'>
          Non Coffee
        </h1>
        <p className='text-center mb-12 text-sm xl:text-base'>
          Most wanted food and drink
        </p>
        <Carousel items={items} />
      </section>
      <section className=''>
        <h1 className='text-2xl lg:text-3xl xl:text-4xl font-semibold text-center mt-16 mb-2 xl:mb-3'>
          Food
        </h1>
        <p className='text-center mb-12 text-sm xl:text-base'>
          Most wanted food and drink
        </p>
        <Carousel items={items} />
      </section>
    </main>
  );
}
