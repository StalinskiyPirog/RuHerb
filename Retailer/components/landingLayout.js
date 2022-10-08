import Navbar from "./landing/navbar";
import Footer from "./footer";

export default function Layout({ children }) {
    return (
      <>
        <Navbar />
        <div className=" sm:h-16 md:h-24 lg:h-32  h-12"></div>
        <main className="min-h-screen">{children}</main>
       
        
        <Footer />
       
       
      </>
    )
  }