import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Head from "next/head";
import Hamburger from "hamburger-react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <Head>
        <title>RuHerb - интернет-магазин для преобретения ЗОЖ-продукции</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <nav className="w-full fixed z-[10] h-[10] border-black shadow-xl bg-white">
        <div className="flex justify-between  mx-0 my-auto lg:max-w-full md:items-center md:px-8">
          
         
            <div className="flex relative sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 w-12 h-12 items-center justify-between py-3 md:py-2">
              <Link href="/">
                <Image
                  src="/design_parts/logo.png"
                  href="/"
                  layout="fill"
                  objectFit="cover"
                  alt="/"
                />
              </Link>
            </div>
            <div className="md:hidden  self-center ">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                        <div >
            <div className={`flex-1 sm:pb-3 sm:mt-8 md:block justify-self-center md:pb-0 md:mt-0 ${
                            navbar ? "" : "hidden"
                        }`}>
              <ul className="items-center justify-center space-y-8 rounded-md md:flex md:space-x-6 md:space-y-0">
                <li className="hover:text-black text-green-700">
                  <Link href="/retailer#first">Стать продавцом</Link>
                </li>
                <li className="hover:text-black text-green-700">
                  <Link href="/retailer#second">О сервисе</Link>
                </li>
                <li className="hover:text-black text-green-700">
                  <Link href="/retailer#third">Сотрудничество</Link>
                </li>
                <li className="hover:text-black text-green-700">
                  <Link href="/retailer/lk">Личный кабинет</Link>
                </li>
               
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
