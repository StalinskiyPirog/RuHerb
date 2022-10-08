import Navbar from "./navbar/navbar";
import Tabbar from "./tabbar/tabbar";
import { useRouter } from "next/router";
import Footer from "./footer";

const navigationData = [
  "/",
  "/searchResult",
  "/order",
  "/profile",
];
export default function NavigationLayout({children}) {

  const router = useRouter();
  return (
    <div>
      <Navbar
        navigationData={navigationData} 
        
      />

      <main>{children}</main>
      {/* <Tabbar navigationData={navigationData} router={router} /> */}
      {/* <Footer /> */}
    </div>
  );
}
