import NavBar from "./NavBar/NavBar";
import Tabbar from "./tabbar/tabbar";
import { useRouter } from "next/router";


const navigationData = [
  "/",
  "/table",
];

export default function NavigationLayout({children}){
  const router = useRouter();
return(
  <div>
    {router.pathname =="/login"? <></> :
      <NavBar navigationData={navigationData} router={router} 
      />}
      <main>{children}</main>
      <Tabbar navigationData={navigationData} router={router} />
    </div>
);
}