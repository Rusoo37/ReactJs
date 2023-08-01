import { Box, Button, Typography } from "@mui/material";
import "./CardCart.css";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";

const CardCart = ({ elemento, total }) => {
    const { deleteById } = useContext(CartContext);
    return (
        <Box key={elemento.id} className="container-card-cart">
            <img src={elemento.img} alt="Imagen" className="img-cardCart" />
            <Typography className="tittle-cardCart">
                {elemento.tittle}
            </Typography>
            <Typography className="cantidad-cardCart">
                cantidad: {elemento.cantidad}
            </Typography>
            <Typography className="price-cardCart">${total}</Typography>
            <Button
                onClick={() => deleteById(elemento.id)}
                variant="outlined"
                color="error"
                sx={{ height: "20px", padding: "20px" }}
            >
                Eliminar
            </Button>
        </Box>
    );
};

export default CardCart;
