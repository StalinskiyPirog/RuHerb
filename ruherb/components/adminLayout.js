import Footer from "./footer"
import Sidebar from "./admin/Sidebar"

export default function Layout({children}){
    return(
        <>
        <Sidebar/>
        
        <main className="min-h-screen">{children}</main>
        
        <Footer />
    
        </>
    )
}