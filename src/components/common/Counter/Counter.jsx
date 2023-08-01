import { Button, Typography } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
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
            {stock != 0 ? (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "left",
                        gap: "20px",
                    }}
                >
                    <Button
                        disabled={contador <= 1}
                        variant="outlined"
                        onClick={() => setContador(contador - 1)}
                    >
                        -
                    </Button>
                    <h2>{contador}</h2>
                    <Button
                        disabled={contador >= stock}
                        variant="outlined"
                        onClick={() => setContador(contador + 1)}
                    >
                        +
                    </Button>{" "}
                </div>
            ) : (
                <Typography variant="h4">Sin stock</Typography>
            )}
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
                    disabled={stock == 0 ? true : false}
                >
                    Agregar al carrito
                </Button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Counter;
