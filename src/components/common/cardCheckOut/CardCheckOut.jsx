import { Box, Button, Typography } from "@mui/material";
import "./CardCheckOut.css";

const CardCheckOut = ({ elemento, total }) => {
    return (
        <Box key={elemento.id} className="container-card-CheckOut">
            <img src={elemento.img} alt="Imagen" className="img-cardCheckOut" />
            <Typography className="tittle-cardCheckOut">
                {elemento.tittle}
            </Typography>
            <Typography className="cantidad-cardCheckOut">
                {elemento.cantidad}
            </Typography>
            <Typography className="price-cardCheckOut">${total}</Typography>
        </Box>
    );
};

export default CardCheckOut;
