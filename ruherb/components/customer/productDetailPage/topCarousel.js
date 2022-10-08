import Carousel from "react-multi-carousel";
import {useEffect} from "react";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./productCard";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 1536, min: 1280 },
    items: 7,
    
    slidesToSlide: 7
  },
  desktop: {
    breakpoint: { max: 1280, min: 1024 },
    items: 5,
    
    slidesToSlide: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 4,
    
    slidesToSlide: 4
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 2,
    
    slidesToSlide: 2
  }
};


export default function TopProductCarousel({array,props}){
  console.log("появилось?")
    return( 
        <Carousel responsive={responsive}
           
          swipeable={true}
          ssr
          showDots
          
          containerClass="container-with-dots">
          {array.map((item)=><ProductCard key={item.id} id={item.id} title={item.title} price={item.price} rating={item.rating} category={item.category} />)}
                 
        </Carousel>);
}

