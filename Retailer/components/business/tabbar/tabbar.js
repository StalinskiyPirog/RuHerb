import classNames from "classnames";
import { MdQueryStats, MdDynamicFeed } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import Link from "next/link";
import { useCallback } from "react";
export default function Tabbar({ navigationData, router }) {
  const getTabIcon = useCallback((item) => {
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

  return (
    <nav className="fixed flex flex-row items-center justify-between visible w-full px-8 text-2xl bg-[#a4c852] z-50 bottom-0 md:hidden h-20 md:invisible">
      {navigationData.map((item, index) => (
        <Link key={index} href={item}>
          <span
            className={router.pathname == item?"border-gray-700 bg-gradient-to-t from-[#a4c852] to-[#7a943f] flex items-center justify-center h-full text-black cursor-pointer hover:text-white w-full"
            
            : "flex items-center justify-center h-full text-black cursor-pointer hover:text-white w-full"
               
                }
          >{getTabIcon(item)}
          </span>
        </Link>
      ))}
    </nav>
  );
}
