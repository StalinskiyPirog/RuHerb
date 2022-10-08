import NavigationLayout from "../components/layout/NavigationLayout";
import Footer from "./Footer";
export default function Layout({children}){
    return(
      < >
      <NavigationLayout

      />
 <main> {children}</main>
      <Footer /> 
    </>
    );
}