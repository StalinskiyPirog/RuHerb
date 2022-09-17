import Sidebar from "./sidebar/sidebar";
import Tabbar from "./tabbar/tabbar";
import { useRouter } from "next/router";

import Image from "next/image";

const navigationData = [
  "/retailer/lk",
  "/retailer/lk/feed",
  "/retailer/lk/stats",
  "/retailer/lk/create",
];
export default function Nav({}) {

  const router = useRouter();
  return (
    <div>
      <Sidebar navigationData={navigationData} router={router} 
      />
      
      <Tabbar navigationData={navigationData} router={router} />
    </div>
  );
}
