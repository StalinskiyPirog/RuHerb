
import ProductCard from "../components/productDetailPage/productCard";
import Heading from "../components/productDetailPage/title";
import { useWishlist } from "react-use-wishlist";
export default function FavouritePage(){
    const {IsWishlistEmpty,totalWishlistItems,
      items,
      removeWishlistItem,} = useWishlist();
    return(
        <>
        <div className="h-12 sm:h-16  md:h-24  lg:h-32">

</div>
        
        {!IsWishlistEmpty ? <div className="mx-auto max-w-xl text-center">
  <h2 className="text-2xl font-bold sm:text-3xl"><Heading text="Избранное" /></h2>

  <p className="mx-auto text-xl mt-4 text-gray-500">
    Похоже, что у вас ничего нет в избранном
  </p>

  <a
    href="/"
    className="group mt-8 flex items-center justify-between rounded-lg border border-green-600 px-5 py-3 text-green-600 hover:bg-green-600"
  >
    <span className="text-lg font-medium group-hover:text-white">
      Перейти на главную страницу
    </span>

    <span
      className="ml-4 flex-shrink-0 rounded-full border border-blue-600 bg-white p-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </span>
  </a>
</div>
:<div className="grid grid-cols-4 gap-4">
        
        {items.map((item)=>{
            <ProductCard id={item.id} title={item.title} price={item.price} />      
        })}

</div>}
        </>
    );
}
