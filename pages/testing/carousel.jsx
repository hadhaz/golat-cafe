import Carousel from "../../components/carousel/Carousel";

export default function Home() {
  const arr = [
    {
      name: "Americano HUHUH",
      price: 50000,
      img: "\/product\/c-americano.png",
      category: 'non-coffee',
      bestSeller: false
    },
    {
      name: "Cappucino",
      price: 52000,
      img: "/product/c-cappucino.png",
    },
    {
      name: "Americano",
      price: 40000,
      img: "/product/c-americano.png",
    },
    {
      name: "Bamericano",
      price: 70000,
      img: "/product/c-americano.png",
    },
  ];

  return <Carousel items={arr} />;
}
