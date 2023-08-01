import { Button, Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import CardCart from "../../common/CardCart/CardCart";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = ({ limpiar }) => {
    const { cart, getTotalPrice } = useContext(CartContext);
    let total = getTotalPrice();
    return (
        <div className="container-cart">
            <Typography variant="h3">Carrito</Typography>
            {cart.length > 0 ? (
                cart.map((elemento) => (
                    <CardCart
                        key={elemento.id}
                        elemento={elemento}
                        total={total}
                    />
                ))
            ) : (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "2rem",
                    }}
                >
                    <img
                        src="https://res.cloudinary.com/dqonbozpq/image/upload/v1690132374/2762885_fmsghs.png"
                        alt="CarritoVacio"
                        style={{ height: "10rem" }}
                    />
                    <Typography variant="h4">
                        El carrito está vacio..
                    </Typography>
                </div>
            )}
            {cart.length > 0 ? (
                <div style={{ display: "flex", gap: "20px" }}>
                    <Button variant="outlined" onClick={limpiar}>
                        Eliminar carrito
                    </Button>
                    <Link to="/checkout">
                        <Button variant="outlined">Finalizar compra</Button>
                    </Link>
                </div>
            ) : (
                <div style={{ display: "flex", gap: "20px" }}>
                    <Link to="/">
                        <Button variant="outlined">Volver al home</Button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Cart;
