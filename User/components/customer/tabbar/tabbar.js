import classNames from "classnames";
import { AiFillHome, AiFillCompass } from "react-icons/ai";
import { BsFillBagFill, BsFillPersonFill } from "react-icons/bs";
import Link from "next/link";
import { useCallback } from "react";
export default function Tabbar({ navigationData, router }){
  const getTabIcon = useCallback((item) => {
    switch (item) {
      case "/client" :
        return <AiFillHome />;
      case "/client/searchResult/result":
        return <AiFillCompass />;
      case "/client/order":
        return <BsFillBagFill />;
     
      case "/client/profile":
        return <BsFillPersonFill />;
    }
  }, []);

  return (
    <nav className="fixed flex flex-row items-center justify-between visible w-full px-8 text-2xl bg-[#a4c852] z-50 bottom-0 md:hidden h-20 md:invisible">
      {navigationData.map((item, index) => (
        <Link key={index} href={item}>
        <span
          
          className={classNames([
            "flex items-center justify-center h-full text-black cursor-pointer hover:text-white w-full",
            router.pathname == {item} && "border-gray-700 bg-gradient-to-t from-[#a4c852] to-[#7a943f]  border-t-3",
          ])}
          
        >
          <span className="-mb-1 ">{getTabIcon(item)}</span>
        </span>
        </Link>
      ))}
    </nav>
  );
};

