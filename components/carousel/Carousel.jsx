import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import MenuCard from "../card/MenuCard";

export default function Carousel({ items, type }) {
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
      slides: {
        perView: loaded ? window.innerWidth > 840 ? 3 : window.innerWidth > 520 ? 2 : 1 : 3,
      },
      loop: true,
    },
    [
      slider => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div
      ref={sliderRef}
      className='keen-slider max-w-7xl w-3/4 mx-auto text-2xl text-black'
    >
      {type !== "all" &&
        items.map((item, index) => {
          if (item.category === type)
            return <MenuCard item={item} key={index} />;
        })}
      {type == "all" &&
        items.map((item, index) => {
          if (item.bestSeller) return <MenuCard item={item} key={index} />;
        })}

      {loaded && instanceRef.current && (
        <>
          <>
            <Arrow
              left
              onClick={e => e.stopPropagation() || instanceRef.current?.prev()}
            />

            <Arrow
              onClick={e => e.stopPropagation() || instanceRef.current?.next()}
            />
          </>
        </>
      )}
    </div>
  );
}

function Arrow(props) {
  return (
    <svg
      onClick={props.onClick}
      className={`w-[40px] cursor-pointer fill-mango hover:fill-mangoTango aspect-square absolute top-1/2 -translate-y-1/2 ${
        props.left ? "left-2" : "right-2"
      }`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
      {props.left && (
        <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
      )}
      {!props.left && (
        <path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
      )}
    </svg>
  );
}
