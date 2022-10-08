import classNames from "classnames";
import {AiFillHome} from "react-icons/ai";
import { FaTable, FaUserAlt } from "react-icons/fa";
import Link from "next/link";
import { useCallback } from "react";
export default function Tabbar({ navigationData, router }) {
  const getIcon = useCallback((item) => {
    switch (item) {
      case "/":
        return <AiFillHome />;
      case "/table":
        return <FaTable />;
    }
  }, []);

  return (
    <nav className="fixed flex flex-row items-center justify-between visible w-full px-8 text-2xl bg-[#a4c852] z-50 bottom-0 mdhidden h-20 md:invisible">
      {navigationData.map((item, index) => (
        <Link key={index} href={item}>
          <span
            className={router.pathname == item?"border-gray-700 bg-gradient-to-t from-[#a4c852] to-[#7a943f] flex items-center justify-center h-full text-black cursor-pointer hover:text-white w-full"
            
            : "flex items-center justify-center h-full text-black cursor-pointer hover:text-white w-full"
               
                }
          >{getIcon(item)}
          </span>
        </Link>
      ))}
    </nav>
  );
}
