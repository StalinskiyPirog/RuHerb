import Navbar from "./navbar/navbar";
import Tabbar from "./tabbar/tabbar";
import { useRouter } from "next/router";

const navigationData = [
  "/",
  "/searchResult/result",
  "/order",
  "/profile",
];
export default function Nav({}) {

  const router = useRouter();
  return (
    <div>
      <Navbar
        navigationData={navigationData}
        
      />
      <Tabbar navigationData={navigationData} router={router} />
    </div>
  );
}
