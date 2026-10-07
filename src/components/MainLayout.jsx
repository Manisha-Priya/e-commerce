import Navbar from "./Navbar";
import Footer from "./Footer";
import {Outlet} from "react-router";

function MainLayout(){
    

    return (
        <div className="min-h-screen w-full bg-gray-100">
        <Navbar />
        <main className="flex-1 w-full">
            <Outlet />
        </main>
        <Footer />
        </div>
    );
}
export default MainLayout;