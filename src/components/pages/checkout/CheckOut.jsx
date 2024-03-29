import { Button, TextField, Typography } from "@mui/material";
import CardCheckOut from "../../common/cardCheckOut/CardCheckOut";
import "./Checkout.css";
import { Link, useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const CheckOut = ({
    handleSubmit,
    handleChange,
    errors,
    orderId,
    cart,
    total,
}) => {
    return (
        <div className="container-checkout">
            <Typography variant="h3" sx={{ marginTop: "3rem" }}>
                CheckOut
            </Typography>
            {orderId ? (
                <div className="compra-exitosa">
                    <h3>
                        Su número de compra es: <strong>{orderId}</strong>
                    </h3>
                    <h4>Guardar numero para el seguimiento!</h4>
                    <Link to="/">
                        <Button variant="outlined">Volver al home</Button>
                    </Link>
                </div>
            ) : cart.length != 0 ? (
                <div className="container-blocks">
                    <form
                        onSubmit={handleSubmit}
                        className="block-1"
                        style={{ padding: "2rem" }}
                    >
                        <TextField
                            type="text"
                            name="nombre"
                            label="Ingrese su nombre.."
                            onChange={handleChange}
                            variant="standard"
                            error={errors.nombre ? true : false}
                            helperText={errors.nombre}
                        />
                        <TextField
                            type="text"
                            name="apellido"
                            label="Ingrese su apellido.."
                            onChange={handleChange}
                            variant="standard"
                            error={errors.apellido ? true : false}
                            helperText={errors.apellido}
                        />
                        <TextField
                            type="text"
                            name="phone"
                            label="Ingrese su telefono.."
                            onChange={handleChange}
                            variant="standard"
                            error={errors.phone ? true : false}
                            helperText={errors.phone}
                        />
                        <TextField
                            type="text"
                            name="email"
                            label="Ingrese su mail.."
                            onChange={handleChange}
                            variant="standard"
                            error={errors.email ? true : false}
                            helperText={errors.email}
                        />
                        <TextField
                            type="text"
                            name="localidad"
                            label="Ingrese su localidad.."
                            onChange={handleChange}
                            variant="standard"
                            error={errors.localidad ? true : false}
                            helperText={errors.localidad}
                        />
                        <Button variant="outlined" type="submit">
                            Comprar
                        </Button>
                    </form>
                    <div>
                        <div
                            className="block-1"
                            style={{
                                width: "100%",
                                height: "20rem",
                                overflowY: "scroll",
                            }}
                        >
                            {cart.map((elemento) => (
                                <CardCheckOut
                                    key={elemento.id}
                                    elemento={elemento}
                                    total={total}
                                />
                            ))}
                        </div>
                        <div className="total-check">
                            <Typography variant="h5">
                                Total: ${total}
                            </Typography>
                        </div>
                    </div>
                </div>
            ) : (
                <div style={{ height: "30rem", marginTop: "5rem" }}>
                    <CircularProgress />
                </div>
            )}
        </div>
    );
};

export default CheckOut;
