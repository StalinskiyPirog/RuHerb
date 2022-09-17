import Nav from "./customer/navigationBar";
import Footer from "./footer";

export default function Layout({ children }) {
    return (
      <>
     
        <Nav />
      
        
        <main className="min-h-screen ">{children}</main>
        
      
        <Footer />
       
      </>
    )
  }