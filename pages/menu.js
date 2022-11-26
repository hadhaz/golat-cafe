import Navbar from "../components/header/Navbar";
import BestSeller from "../components/catalogue/BestSeller";
import CoffeeOverlay from "../components/main/Overlay";
import Catalogue from "../components/catalogue/Catalouge";

export default function Menu() {
  return (
    <>
      <CoffeeOverlay top={"100px"} />
      <Navbar />
      <main className='flex flex-col xl:gap-12 lg:gap-4 pt-16'>
        <BestSeller />
        {menus.map(item => (
          <Catalogue
            title={item.title}
            desc={item.desc}
            type={item.type}
            key={item.title}
          />
        ))}
      </main>
    </>
  );
}

const menus = [
  { title: "Coffee", desc: "Most wanted coffee", type: "coffee" },
  { title: "Non-Coffee", desc: "Most wanted drink", type: "non-coffee" },
  { title: "Food", desc: "Most wanted food", type: "food" },
];
