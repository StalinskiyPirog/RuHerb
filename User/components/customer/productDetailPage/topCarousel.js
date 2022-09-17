import Carousel from "react-multi-carousel";
import {useEffect} from "react";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./productCard";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
    
    slidesToSlide: 8
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    
    slidesToSlide: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    
    slidesToSlide: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    
    slidesToSlide: 2
  }
};


export default function TopProductCarousel({props}){
    return( 
        <Carousel responsive={responsive}
           
          swipeable={true}
          ssr
          showDots
          
          containerClass="container-with-dots">
          <ProductCard imageSrc={"/design_parts/e62VP.jpg"} />
          <ProductCard imageSrc={"/design_parts/watermelonDrink.png"} />
          <ProductCard imageSrc={"/design_parts/e62VP.jpg"} />
          <ProductCard imageSrc={"/design_parts/watermelonDrink.png"} />
          <ProductCard imageSrc={"/design_parts/e62VP.jpg"} />
          <ProductCard imageSrc={"/design_parts/watermelonDrink.png"} />          
        </Carousel>);
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(API_URL+`/client/getProduct/topNewest`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } }
}
