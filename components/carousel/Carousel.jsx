import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import MenuCard from "../card/MenuCard";

export default function Carousel({ items }) {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log("slide changed");
      },
      slides: {
        perView: 2,
      },
      loop: true,
    },
    []
  );

  return (
    <div
      ref={sliderRef}
      className='keen-slider max-w-[50%] bg-yellow-200 text-2xl text-black'
    >
      {items.map((item, index) => {
        return <MenuCard item={item} key={index} />;
      })}
    </div>
  );
}
