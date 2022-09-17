
import Footer from "./footer";
import Nav from "./business/navbar";

export default function Layout({children}){
    return(
        <>
        <Nav />
        
        <main className="min-h-screen max-w-2/3 md:w-1/2">{children}</main>
        
        <Footer />
    
        </>
    )
}