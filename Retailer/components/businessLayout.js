
import Footer from "./footer";
import Nav from "./business/navbar";

export default function Layout({children}){
    return(
        <div className="flex">
        <Nav />
        
        <main ><div className="min-h-screen max-w-2/3 md:w-1/2">{children}</div>
        <Footer /></main>
        
        
    
        </div>
    )
}
