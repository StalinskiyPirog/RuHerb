
import Carousel from "react-multi-carousel";
import ProductCard from "./productCard";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  

export default function ProductDetailCarousel({arr}){
    return(
        <Carousel responsive={responsive} arrows removeArrowOnDeviceType={["tablet", "mobile"]} itemClass="carousel-item-padding-40-px">
          <ProductCard imageSrc={"/design_parts/e62VP.jpg"} />
          <ProductCard imageSrc={"/design_parts/watermelonDrink.png"} />
          <ProductCard imageSrc={"/design_parts/e62VP.jpg"} />
          <ProductCard imageSrc={"/design_parts/watermelonDrink.png"} />
          <ProductCard imageSrc={"/design_parts/e62VP.jpg"} />
          <ProductCard imageSrc={"/design_parts/watermelonDrink.png"} />          
        </Carousel>);
  
}