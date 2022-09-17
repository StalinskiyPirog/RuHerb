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
        <Heading text="Избранное" />
        {IsWishlistEmpty() ? <div
  className="p-4 border rounded text-sky-700 bg-sky-50 border-sky-900/10"
  role="alert"
>
  <strong className="text-sm font-medium">Кажется у вас ничего нет в избранном попробуйте следующее</strong>

  <ul className="mt-1 ml-2 text-xs list-disc list-inside">
    <li>Перейти на главную страницу и нажать на сердечко</li>
    <li>Перейти в поиск товара и нажать на сердечко</li>
    <li>Перейти на страницу товара и нажать на сердечко</li>
  </ul>
</div>:<div className="grid grid-cols-4 gap-4">
        
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