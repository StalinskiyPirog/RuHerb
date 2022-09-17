import Navbar from "./landing/navbar";
import Footer from "./footer";

export default function Layout({ children }) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen">{children}</main>
       
        
        <Footer />
       
       
      </>
    )
  }