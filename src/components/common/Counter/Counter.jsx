import { Button } from "@mui/material";
import React from "react";

const Counter = ({ stock, contador, setContador, agregarAlCarrito }) => {
    return (
        <div>
            <Button
                /* disabled={contador > 0 ? false : true} */
                disabled={contador <= 1}
                onClick={() => setContador(contador - 1)}
            >
                -
            </Button>
            <h2>{contador}</h2>
            <Button
                /* disabled={contador < stock ? false : true} */
                disabled={contador >= stock}
                onClick={() => setContador(contador + 1)}
            >
                +
            </Button>
            <Button onClick={() => agregarAlCarrito(contador)}>
                Agregar al carrito
            </Button>
        </div>
    );
};

export default Counter;
