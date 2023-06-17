import "./Navbar.css";
import CartWidget from "../../common/cartWidget/CartWidget";
import ItemListContainer from "../../pages/itemList/ItemListContainer";
import User from "../../common/user/User";
import Logo from "../../common/logo/Logo";
import { Box, Paper } from "@mui/material";
import BarraBusqueda from "../../common/barra/BarraBusqueda";

const Navbar = () => {
    return (
        <div className="nav-container">
            {/* LOGO */}

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "10%",
                }}
            >
                <Logo />
            </Box>

            {/* BARRA DE BUSQUEDA */}

            <Paper
                component="form"
                sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: { xs: "200px", sm: 300, md: 400 },
                }}
            >
                <BarraBusqueda />
            </Paper>

            {/* LISTA DE ITEMS */}

            <Box
                sx={{
                    width: { xs: "10%", sm: "30%", md: "30%" },
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row", md: "row" },
                    justifyContent: {
                        xs: "start",
                        sm: "space-around",
                        md: "space-around",
                    },
                    alignItems: "center",
                }}
            >
                <ItemListContainer />
            </Box>

            {/* CARRITO Y LOGIN */}

            <Box
                sx={{
                    display: "flex",
                    justifyContent: { xs: "space-between", md: "space-around" },
                    width: { xs: "15%", sm: "10%", md: "10%" },
                }}
            >
                <CartWidget />
                <User />
            </Box>
        </div>
    );
};

export default Navbar;

/* 
Tareas: Aplicar los grid a los div con las columnas
*/
