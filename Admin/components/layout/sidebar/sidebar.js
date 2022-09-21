import Link from "next/link";
import Image from "next/image";
import {  GrUserAdmin } from "react-icons/gr";
import {ImUsers} from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { FaAppleAlt } from "react-icons/fa";
import { ImUserTie } from "react-icons/ai";

import { useCallback } from "react";

export default function SideBar({ navigationData, router }) {
  const getIcon = useCallback((item) => {
    switch (item) {
      case "/":
        return <CgProfile />;
      case "/moders":
        return <GrUserAdmin />;
      case "/products":
        return <FaAppleAlt />;
      case "/retailers":
        return <ImUserTie />;
      case "/users":
        return <ImUsers />;
    }
  }, []);
  const getTitle = useCallback((item) => {
    switch (item) {
      case "/":
        return "Главная страница";
      case "/moders":
        return "Страница с редактированием модераторов";
      case "/products":
        return "Страница с редактированием продуктов";
      case "/retailers":
        return "Страница с редактированием ритейлеров";
      case "/users":
        return "Страница с редактированием юзеров";
    }
  }, []);
  return (
    <section className="bg-[url('../public/design_parts/sidebar.png')] bg-no-repeat bg-cover w-sm invisible md:visible  border-l-green-700 right-0 h-full fixed shadow-md border-2 ">
      
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
    

      
    </section>
  );
}
