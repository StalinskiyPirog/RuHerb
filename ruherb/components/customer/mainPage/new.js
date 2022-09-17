import TopProductCarousel from "../productDetailPage/topCarousel";
import Heading from "../productDetailPage/title";
const products = [
  {id:0,
    title: "Product_0",
    category: "Hurb",
    rating: 4,
  price: 100},
  {id:1,
    title: "Product_1",
    category: "Hurb",
    rating: 4,
  price: 100},
  {id:2,
  title: "Product_2",
  category: "Hurb",
  rating: 4,
price: 100},
{id:3,
  title: "Product_3",
  category: "Hurb",
  rating: 4,
price: 100},
{id:4,
  title: "Product_4",
  category: "Hurb",
  rating: 4,
price: 100},
{id:5,
  title: "Product_5",
  category: "Hurb",
  rating: 4,
price: 100},

]

export default function NewBlock(){
    return(<div className="p-2 m-2">
      <Heading text="Новинки" />
      <br />
      <TopProductCarousel array={products}/>
    </div>);
}