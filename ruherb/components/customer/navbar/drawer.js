import Image from "next/image";
import a from "next/link";

import Hamburger from "hamburger-react";
const drawerList = [
  { index: 0, title: "Витамины", keyword: "витамины" },
  { index: 1, title: "Биодобавки", keyword: "биодобавки" },
  { index: 2, title: "Лекарства", keyword: "лекарства" },
  { index: 3, title: "Лечебные травы", keyword: "лечебные" },
  { index: 4, title: "Чаи", keyword: "чаи" },
  { index: 5, title: "Фрукты", keyword: "фрукты" },
  { index: 6, title: "Злаки", keyword: "злаки" },
  { index: 7, title: "Напитки", keyword: "напитки" },
];

export default function Drawer({ children, isOpen, setIsOpen }) {
  return (
    <main
      className={
        " fixed overflow-hidden z-[1000] bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out   " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen divide-y max-w-lg left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform" +
          (isOpen ? " translate-x-0 " : " -translate-x-full ")
        }
      >
        <div className="my-auto z-40 mx-0 md:px-8">
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </div>
        <div className="flex justify-center align-middle	">
          <div className="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
            {drawerList.map((item) => (
              <a
                key={item.index}
                className="block
         px-6
         py-2
         border-b border-gray-200
         w-full
         hover:bg-gray-100 hover:text-gray-500
         focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600
         transition
         duration-500
         cursor-pointer"
                href={`/api/client/getProductList?keyword=${item.keyword
                  .split(" ")
                  .join("+")}`}
              >
                {item.title}
              </a>
            ))}{" "}
          </div>
        </div>
        <div className="flex justify-center align-middle	md:hidden">
        <div className="bg-white  rounded-lg border border-gray-200 w-96 text-gray-900">
                  <a className="block
         px-6
         py-2
         border-b border-gray-200
         w-full
         hover:bg-gray-100 hover:text-gray-500
         focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600
         transition
         duration-500
         cursor-pointer" href="/client/delivery">Доставка</a>
             
                  <a className="block
         px-6
         py-2
         border-b border-gray-200
         w-full
         hover:bg-gray-100 hover:text-gray-500
         focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600
         transition
         duration-500
         cursor-pointer" href="/client/payment">Оплата</a>
               
                  <a className="block
         px-6
         py-2
         border-b border-gray-200
         w-full
         hover:bg-gray-100 hover:text-gray-500
         focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600
         transition
         duration-500
         cursor-pointer" href="/client/favourite">Избранное</a>
               
             
                  <a className="block
         px-6
         py-2
         border-b border-gray-200
         w-full
         hover:bg-gray-100 hover:text-gray-500
         focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600
         transition
         duration-500
         cursor-pointer" href="/client/lk">Личный кабинет</a>
               
                </div></div>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
      
    </main>
  );
}
