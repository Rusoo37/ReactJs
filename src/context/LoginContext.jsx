import { useState, createContext } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext();

const LoginContextComponent = ({ children }) => {
    const navigate = useNavigate();
    const [isAdmin, setIsAdmin] = useState(false);
    const [isUser, setIsUser] = useState(false);
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("sesion")) || {}
    );

    const inicioDeSesion = (usuario) => {
        localStorage.setItem("sesion", JSON.stringify(usuario));
        setUser(usuario);
        setIsUser(true);
        if (usuario.email === "nicoruso37@outlook.com") {
            setIsAdmin(true);
        }
        navigate("/");
    };

    const cerrarSesion = () => {
        Swal.fire({
            title: "Estas seguro?",
            text: "Cerraras Sesión!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, salir!",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Excelente!", "Sesión cerrada.", "success");
                setUser({});
                setIsUser(false);
                setIsAdmin(false);
                localStorage.setItem("sesion", JSON.stringify({}));
                navigate("/");
            }
        });
    };
    let data = {
        user,
        isUser,
        isAdmin,
        inicioDeSesion,
        cerrarSesion,
    };

    return (
        <LoginContext.Provider value={data}>{children}</LoginContext.Provider>
    );
};

export default LoginContextComponent;
