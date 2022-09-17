
import Footer from "./footer";
import Nav from "./business/navbar";

export default function Layout({children}){
    return(
        <>
        <Nav />
        
        <main className="min-h-screen">{children}</main>
        
        <Footer />
    
        </>
    )
}