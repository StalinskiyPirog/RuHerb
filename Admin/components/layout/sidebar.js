import Sidebar from "./sidebar/sidebar";
import Tabbar from "./tabbar/tabbar";
import { useRouter } from "next/router";


const navigationData = [
  "/",
  "/moders",
  "/products",
  "/retailers",
  "/users"
];

export default function SideBar({}){
  const router = useRouter();
return(
  <div>
      <Sidebar navigationData={navigationData} router={router} 
      />
      
      <Tabbar navigationData={navigationData} router={router} />
    </div>
);
}