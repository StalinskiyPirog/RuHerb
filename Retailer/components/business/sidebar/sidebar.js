import Link from "next/link";
import Image from "next/image";
import { MdQueryStats, MdDynamicFeed } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

import { useCallback } from "react";

export default function SideBar({ navigationData, router }) {
  const getIcon = useCallback((item) => {
    switch (item) {
      case "/lk/stats":
        return <MdQueryStats />;
      case "/lk/products":
        return <MdDynamicFeed />;
      case "/lk":
        return <CgProfile />;
      case "/lk/create":
        return <AiOutlineAppstoreAdd />;
    }
  }, []);
  const getTitle = useCallback((item) => {
    switch (item) {
      case "/lk/stats":
        return "Статистика";
      case "/lk/products":
        return "Лента продуктов";
      case "/lk":
        return "Профиль";
      case "/lk/create":
        return "Создать новый продукт";
    }
  }, []);
  return (
    <aside className="bg-[url('../public/design_parts/sidebar.png')] bg-repeat bg-cover w-sm invisible md:visible fixed  top-0 border-green-700 right-0 h-auto shadow-md border-2 ">
      
        <div className="w-72  content-center    h-screen">
          <nav className="mt-10 px-6 flex-col ">
         {  navigationData.map((item, index) => (
          <div  key={index} className={router.path == item? "flex items-center p-2 my-6 transition-colors  duration-200  text-gray-800 dark:text-green-100 rounded-lg bg-gray-100 dark:bg-gray-600" : "flex items-center p-2 my-6 transition-colors  duration-200  text-gray-600 dark:text-green-600 rounded-lg"}>
            <a className="rounded-full relative inline-block px-8 py-3 overflow-hidden border border-green-700 group focus:outline-none focus:ring" 
              href={item}
              
            >
               <span className="absolute inset-y-0 right-0 w-[2px] transition-all bg-green-700 group-hover:w-full group-active:bg-green-700"></span>
               <span className="relative text-sm font-medium text-green-500 transition-colors group-hover:text-white">
               <div className="mx-4 flex text-xl font-normal">{getTitle(item)}</div>
  </span>
              
              
            </a>
            </div>
            ))}

           
          </nav>
        </div>
    

      
    </aside>
  );
}
