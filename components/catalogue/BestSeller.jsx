import CatalogueTemplate from "./template/CatalougeTemplate";
import Image from "next/image";

const setting = {
  className: "flex border min-h-[200px]",
  touchThreshold: 30,
  centerMode: true,
  infinite: true,
  slidesToShow: 1,
  speed: 500,
};

export default function BestSeller() {
  //   const data = {
  //     title: "Best Seller",
  //     description: "These are our beloved best seller product",
  //     items: [
  //       { title: "Americano" },
  //       { title: "Americano" },
  //       { title: "Americano" },
  //       { title: "Expresso" },
  //       { title: "Robusto" },
  //     ],
  //   };
  //   return <CatalogueTemplate data={data} />;

  return (
    <div className='flex flex-col items-center col-span-5 min-w-full'>
      <h1 className='text-center text-4xl font-bold'>Best Seller</h1>
      <p>These are our beloved best seller product</p>
    </div>
  );
}
