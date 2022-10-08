import ProductCard from "./productDetailPage/productCard";
import Heading from "./productDetailPage/title";
import { IsWishlistEmpty } from "../functions/WishlistItemsHandle";
export default function ProductGrid({arr}){
    return(
        <>
        <Heading text="Результат" />
        {IsWishlistEmpty() ? <div
  className="p-4 border rounded text-sky-700 bg-sky-50 border-sky-900/10"
  role="alert"
>
  <strong className="text-sm font-medium">Похоже, что ничего не было найдено</strong>

  
</div>:<div className="grid grid-cols-4 gap-4">
        
{arr.map((item)=><ProductCard key={item.id} id={item.id} title={item.title} price={item.price} rating={item.rating} category={item.category} />)}
          

</div>}
        </>
    );
}