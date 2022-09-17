import TopProductCarousel from "../productDetailPage/topCarousel";
import Heading from "../productDetailPage/title";


export default function NewBlock(){
    return(<div className="p-2 m-2">
      <Heading text="Новинки" />
      <br />
      <TopProductCarousel />
    </div>);
}