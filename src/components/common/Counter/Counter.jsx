import { Button } from "@mui/material";
import React from "react";

const Counter = ({ stock, contador, setContador, agregarAlCarrito }) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginTop: "10px",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "left",
                    gap: "20px",
                }}
            >
                <Button
                    /* disabled={contador > 0 ? false : true} */
                    disabled={contador <= 1}
                    variant="outlined"
                    onClick={() => setContador(contador - 1)}
                >
                    -
                </Button>
                <h2>{contador}</h2>
                <Button
                    /* disabled={contador < stock ? false : true} */
                    disabled={contador >= stock}
                    variant="outlined"
                    onClick={() => setContador(contador + 1)}
                >
                    +
                </Button>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                }}
            >
                <Button
                    variant="outlined"
                    onClick={() => agregarAlCarrito(contador)}
                    sx={{ width: 200, height: 40 }}
                >
                    Agregar al carrito
                </Button>
            </div>
        </div>
    );
};

export default Counter;
