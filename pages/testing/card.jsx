import MenuCard from "../../components/card/MenuCard";

export default function Home() {
    const item = {
        name: 'Americano',
        price: 50000,
        img: '\/product\/Caffe-Americano.png'
    }
    return <MenuCard item={item}/>
}