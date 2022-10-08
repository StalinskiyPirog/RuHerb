import Link from "next/link";
import Layout from "../../components/customerLayout";
import ProductCard from "../../components/customer/productDetailPage/productCard";
import Heading from "../../components/customer/productDetailPage/title";
import { IsWishlistEmpty } from "../../components/functions/WishlistItemsHandle";
export default function FavouritePage({arr}){
    return(
        <>
        <div className="h-12 sm:h-16  md:h-24  lg:h-32">

</div>
        
        {IsWishlistEmpty() ? <div class="mx-auto max-w-xl text-center">
  <h2 class="text-2xl font-bold sm:text-3xl"><Heading text="Избранное" /></h2>

  <p class="mx-auto text-xl mt-4 text-gray-500">
    Похоже, что у вас ничего нет в избранном
  </p>

  <a
    href=""
    class="group mt-8 flex items-center justify-between rounded-lg border border-blue-600 px-5 py-3 text-blue-600 hover:bg-blue-600"
  >
    <span class="text-lg font-medium group-hover:text-white">
      Перейти на главную страницу
    </span>

    <span
      class="ml-4 flex-shrink-0 rounded-full border border-blue-600 bg-white p-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
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
        
        {arr.map((item)=>{
            <ProductCard id={item} />      
        })}

</div>}
        </>
    );
}
FavouritePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};