import { Box, Button, TextField } from "@mui/material";
import "./Footer.css";
import Redes from "../../common/redes/Redes";
import Contactos from "../../common/contacto/Contactos";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import * as Yup from "yup";

const Footer = () => {
    const funcionSuscribirse = (e) => {
        e.preventDefault();
        Swal.fire(
            "Operación éxitosa!",
            "Usted se ha suscribido correctamente!",
            "success"
        );
    };
    const { handleSubmit, handleChange, errors } = useFormik({
        initialValues: {
            email: "",
        },
        onSubmit: (data) => {
            Swal.fire(
                "Operación éxitosa!",
                "Usted se ha suscribido correctamente!",
                "success"
            );
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("El email no es válido")
                .required("Este campo es obligatorio"),
        }),
        validateOnChange: false,
    });
    return (
        <div className="container-footer">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    height: "100%",
                }}
            >
                <form onSubmit={handleSubmit} className="suscripcion">
                    <TextField
                        type="text"
                        id="mail"
                        name="email"
                        variant="outlined"
                        label="Email"
                        placeholder="Email.."
                        color="info"
                        onChange={handleChange}
                        error={errors.email ? true : false}
                        helperText={errors.email}
                        sx={{
                            color: "white",
                            borderRadius: "3px",
                            border: "1px solid white",
                        }}
                    />
                    <Button
                        variant="outlined"
                        type="submit"
                        sx={{
                            color: "white",
                            height: "3.5rem",
                            border: "1px solid white",
                        }}
                    >
                        Suscribirme
                    </Button>
                </form>
                <div className="separador"></div>
                <div className="redes">
                    <div style={{ display: "flex", gap: "10px" }}>
                        <ArrowDownwardIcon sx={{ color: "white" }} />
                        <h3 style={{ color: "white" }}>
                            NUESTRAS REDES SOCIALES
                        </h3>
                        <ArrowDownwardIcon sx={{ color: "white" }} />
                    </div>
                    <Contactos />
                    <Redes />
                </div>
            </Box>
            <div className="desarrollado">
                <h4>© Developed by Angladette</h4>
            </div>
        </div>
    );
};

export default Footer;
