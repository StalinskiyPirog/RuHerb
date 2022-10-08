import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Drawer from "./drawer";
import SearchBox from "./searchBox";
import Hamburger from "hamburger-react";
import CartModal from "./cart";
export default function NavBar({ navigationData }) {
  const [drawer, setDrawer] = useState(false);
  const [cart, setCart] = useState(false);

  return (
    <div className=" ">
      <Head>
        <title>RuHerb - интернет-магазин для преобретения ЗОЖ-продукции</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <nav className="w-full z-[10000] fixed top-0   h-12 sm:h-16  md:h-24  lg:h-32 border-green-700 border-b-2   bg-white shadow-xl">
        <div className="flex   justify-between mx-0 my-auto lg:max-w-full md:items-center md:px-8">
          <div>
            {/*//! Левая панель !//
             */}
            <Hamburger toggled={drawer} toggle={setDrawer} />
            <Drawer isOpen={drawer} setIsOpen={setDrawer} />
          </div>
          <div>
            <div  className="relative flex justify-between py-3 md:py-2 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 w-12 h-12">
              {/*//! Лого !//
               */}
              <Link href="/client">
                <Image
                  src="/design_parts/logo.png"
                  href="/"
                  layout="fill"
                  objectFit="cover"
                  alt="/"
                />
              </Link>
            </div>
          </div>
          <div>
            <SearchBox />
          </div>

          <div>
            <div className="flex-1 hidden pb-3 mt-8 justify-self-center md:block md:pb-0 md:mt-0 ">
              <ul className="items-center justify-center space-y-8 rounded-md md:flex md:space-x-6 md:space-y-0">
                <li className="text-green-500 hover:text-green-700">
                  <Link href="/client/delivery">Доставка</Link>
                </li>
                <li className="text-green-500 hover:text-green-700">
                  <Link href="/client/payment">Оплата</Link>
                </li>
                <li className="text-green-500 hover:text-green-700">
                  <Link href="/client/favourite">Избранное</Link>
                </li>
                
                <li className="text-green-500 hover:text-green-700">
                  <Link href="/client/lk">Личный кабинет</Link>
                </li>
                <li className="text-green-500 hover:text-green-700">
                  <button
                    onClick={() => {
                      setCart(true);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="currentColor"
                      className="bi bi-cart"
                      viewBox="0 0 16 16"
                    >
                      {" "}
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />{" "}
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <CartModal open={cart} setOpen={setCart} />
          </div>
        </div>
      </nav>

     
    </div>
  );
}
