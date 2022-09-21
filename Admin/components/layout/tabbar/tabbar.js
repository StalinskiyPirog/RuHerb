import classNames from "classnames";
import { ImUsers, ImUserTie } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { FaAppleAlt } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import Link from "next/link";
import { useCallback } from "react";
export default function Tabbar({ navigationData, router }) {
  const getTabIcon = useCallback((item) => {
    switch (item) {
      case "/moders":
        return <GrUserAdmin />;
      case "/products":
        return <FaAppleAlt />;
      case "/":
        return <CgProfile />;
      case "/retailers":
        return <ImUserTie />;
      case "/users":
        return <ImUsers />;
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
