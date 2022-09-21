import SideBar from "../components/layout/sidebar";
export default function Layout({children}){
    return(
      <div >
      <SideBar

      />
  {children}
      {/* <Footer /> */}
    </div>
    );
}