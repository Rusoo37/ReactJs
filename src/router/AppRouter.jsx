import { Route, Routes } from "react-router-dom";
import { routes } from "./menuRoutes.js";
import NotFoundContainer from "../components/pages/notFound/NotFoundContainer";
import Layout from "../components/layout/Layout.jsx";
import { Dashboard } from "@mui/icons-material";
import ProtectedRoutes from "./ProtectedRoutes.jsx";

const AppRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                {routes.map(({ id, path, Element }) => (
                    <Route key={id} path={path} element={<Element />} />
                ))}
            </Route>
            <Route element={<ProtectedRoutes />}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="*" element={<NotFoundContainer />} />
        </Routes>
    );
};

export default AppRouter;
