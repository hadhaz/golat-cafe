import Image from "next/image";

export default function MenuCard({ item }) {
  const formatter = Intl.NumberFormat("id-ID", {
    currency: "IDR",
    style: "currency",
  });

  return (
    <div className='w-screen keen-slider__slide h-fit px-2 pt-10 flex justify-center'>
      <div className='w-[25%] min-w-fit px-3 aspect-square relative bg-dairyCream flex flex-col items-center justify-end lg:pb-[1.7%] pb-3'>
        <div className='max-w-full -top-10 absolute w-[70%]'>
          <Image alt={item.name} src={item.img} width={400} height={400} />
        </div>
        <h1 className='text-center font-bold text-lg text-black mb-2'>
          {item.name}
        </h1>
        <div className='flex gap-6 text-sm justify-center mt-4'>
          <button className='bg-mangoTango w-28 font-semibold py-2 rounded-sm'>
            Order Now
          </button>
          <div className='text-black flex items-center justify-center font-semibold'>
            {formatter.format(item.price)}
          </div>
        </div>
      </div>
    </div>
  );
}
