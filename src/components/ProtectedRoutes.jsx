import {Outlet,Navigate} from "react-router";

const ProtectedRoute = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")==="true";
    if (!isLoggedIn){
        return <Navigate to="/login" replace />;
          
    }
    return <Outlet />;
};
export default ProtectedRoute;