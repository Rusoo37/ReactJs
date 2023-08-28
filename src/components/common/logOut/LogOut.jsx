import LogoutIcon from "@mui/icons-material/Logout";
import { useContext } from "react";
import { LoginContext } from "../../../context/LoginContext";

const LogOut = () => {
    const { cerrarSesion } = useContext(LoginContext);
    return (
        <button onClick={cerrarSesion} style={{ background: "none" }}>
            <LogoutIcon
                sx={{ color: "white", cursor: "pointer" }}
                size={"30px"}
            />
        </button>
    );
};

export default LogOut;
