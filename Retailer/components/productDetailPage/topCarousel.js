import Carousel from "react-multi-carousel";
import {useEffect} from "react";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./productCard";

const responsive = {
  bigger: {
    breakpoint: { max: 4000, min: 2560 },
    items: 7,
    slidesToSlide: 7
  },
  biggers: {
    breakpoint: { max: 2560, min: 2180 },
    items: 6,
    slidesToSlide: 7
  },
  bigger: {
    breakpoint: { max: 2180 , min: 1600 },
    items: 5,
    slidesToSlide: 7
  },
  superLargeDesktop: {
    breakpoint: { max: 1600, min: 1280 },
    items: 4,
    
    slidesToSlide: 7
  },
  desktop: {
    breakpoint: { max: 1280, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


export default function TopProductCarousel({array,props}){
    return( 
        <Carousel responsive={responsive}
        
          ssr
          showDots
          deviceType="desktop"
          slidesToSlide={2}
  removeArrowOnDeviceType={["tablet", "mobile"]}
          >
          {array.map((item)=><ProductCard key={item.id} id={item.id} title={item.title} price={item.price} rating={item.rating} category={item.category} />)}
                 
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
