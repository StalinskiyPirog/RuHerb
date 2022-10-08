import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Drawer from "./drawer";
import SearchBox from "./searchBox";
import Hamburger from "hamburger-react";
import CartModal from "./cart";
import {AiOutlineShoppingCart} from "react-icons/ai";
export default function NavBar({ navigationData }) {
  const [drawer, setDrawer] = useState(false);
  const [cart, setCart] = useState(false);

  return (
    
      <nav className="w-full z-[10000]  top-0 rounded-xl   h-24 sm:h-32 border-green-700 border-b-2 border-r-2  bg-white shadow-xl">
        <div className="flex   justify-between mx-0 my-auto lg:max-w-full md:items-center md:px-8">
          <div>
            {/*//! Левая панель !//
             */}
            <Hamburger toggled={drawer} toggle={setDrawer} />
            <Drawer isOpen={drawer} setIsOpen={setDrawer} />
          </div>
          <div>
              {/*//! Лого !//
               */}
              <Link href="/">
            <div  className="relative flex justify-between py-3 md:py-2 h-24 sm:h-32     w-24 sm:w-32   ">

                <Image
                  src="/design_parts/logo.png"
                  href="/"
                  layout="fill"
                  objectFit="cover"
                  alt="/"
                />
                </div>
              </Link>
            
          </div>
          <div>
            <SearchBox />
          </div>

          <div>
            <div className="flex-1 hidden pb-3 mt-8 justify-self-center md:block md:pb-0 md:mt-0 ">
              <ul className="items-center justify-center space-y-8 rounded-md md:flex md:space-x-6 md:space-y-0">
                <li className="text-green-500 hover:text-green-700">
                  <Link href="/delivery">Доставка</Link>
                </li>
                <li className="text-green-500 hover:text-green-700">
                  <Link href="/payment">Оплата</Link>
                </li>
                <li className="text-green-500 hover:text-green-700">
                  <Link href="/favourite">Избранное</Link>
                </li>
                
                <li className="text-green-500 hover:text-green-700">
                  <Link href="/lk">Личный кабинет</Link>
                </li>
                <li className="text-green-500 hover:text-green-700">
                  
                </li>
              </ul>
            </div>
          </div>
          <div className="flex pr-4 md:hidden">
              <button 
                    onClick={() => {
                      setCart(true);
                    }}
                  >
                   <AiOutlineShoppingCart className="border border-green-500 text-green-500 rounded-xl flex justify-center align-center  md:py-2 h-12     w-12  " />
                  </button>
          </div>
          <div>
            <CartModal open={cart} setOpen={setCart} />
          </div>
        </div>
      </nav>
   

     
  
  );
}
