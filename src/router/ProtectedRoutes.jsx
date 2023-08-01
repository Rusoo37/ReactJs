import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
    let userRol = "customer";
    return <div>{userRol === "admin" ? <Outlet /> : <Navigate to="/" />}</div>;
};

export default ProtectedRoutes;
