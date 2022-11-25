import Carousel from "../carousel/Carousel";
import items from "../../data/product.json";
import Catalogue from "./Catalouge";

export default function BestSeller() {
  return (
    <Catalogue
      title='BEST SELLER'
      desc='Most wanted food and drink'
      type='all'
    />
  );
}
