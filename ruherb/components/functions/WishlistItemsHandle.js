import { useWishlist } from "react-use-wishlist";

export function AddToWishlist({id,price}){
  const {addWishlistItem} = useWishlist();
  addWishlistItem({id:id, price:price});
}

export function RemoveWishlistItem({id}){
  const {removeWishlistItem } = useWishlist();
  removeWishlistItem(id);
}

export function ClearWishlist(){
  const { emptyWishlist } = useWishlist();
  emptyWishlist();
}

export function WishlistItemsCount(){
  const { wishlistTotal } = useWishlist();
  return wishlistTotal
}

export function IsItemInWishlist({id}){
  const { inWishlist } = useWishlist();

  return(inWishlist(id) ? true : false);
}

export function IsWishlistEmpty(){
  const { isWishlistEmpty } = useWishlist();
  return isWishlistEmpty;
}

export function WishlistItems(){
  const { items } = useWishlist();
  return items;
}