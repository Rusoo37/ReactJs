import { Button, TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "./Login.css";
import { Link, redirect } from "react-router-dom";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import * as Yup from "yup";

const Login = ({
    showPass,
    showPassword,
    callLoginGoogle,
    callLoginFacebook,
    users,
    inicioDeSesion,
}) => {
    const { handleSubmit, handleChange, errors } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (data) => {
            let estaMail = users.some(
                (user) => user.client.email === data.email
            );
            let estaPassword = users.some(
                (user) => user.client.password === data.password
            );
            if (estaMail && estaPassword) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Sesión iniciada correctamente",
                    showConfirmButton: false,
                    timer: 1500,
                });
                inicioDeSesion(data);
                redirect("/home");
            } else {
                Swal.fire("El mail o contraseña incorrecta!", "error");
            }
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("El email no es válido")
                .required("Este campo es obligatorio"),
            password: Yup.string()
                .min(8, "Debe tener al menos 8 carácteres")
                .required("Este campo es obligatorio"),
        }),
        validateOnChange: false,
    });

    return (
        <div className="container-login">
            <form onSubmit={handleSubmit} className="form-login">
                <div style={{ margin: "auto" }}>
                    <h2>Iniciar Sesión</h2>
                </div>
                <div
                    style={{
                        backgroundColor: "#cacaca",
                        height: "2px",
                        width: "100%",
                        marginBottom: "10px",
                    }}
                ></div>
                <div className="inputs">
                    <TextField
                        label="Email"
                        variant="outlined"
                        name="email"
                        onChange={handleChange}
                        error={errors.email ? true : false}
                        helperText={errors.email}
                        sx={{ width: "15rem" }}
                    />
                </div>
                <div
                    style={{
                        width: "110%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "5px",
                    }}
                >
                    <div className="inputs">
                        <TextField
                            type={showPassword ? "text" : "password"}
                            label="Contraseña"
                            variant="outlined"
                            name="password"
                            onChange={handleChange}
                            error={errors.password ? true : false}
                            helperText={errors.password}
                            sx={{ width: "15rem" }}
                        />

                        <button
                            type="button"
                            onClick={showPass}
                            className="btn-visible"
                        >
                            <VisibilityIcon />
                        </button>
                    </div>
                    <span className="inputs-2">
                        Se ha olvidado la Contraseña?
                    </span>
                </div>

                <Button
                    type="submit"
                    color="success"
                    variant="outlined"
                    sx={{ margin: "auto" }}
                >
                    Iniciar Sesión
                </Button>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "1rem",
                    }}
                >
                    <Button
                        variant="outlined"
                        sx={{ gap: "0.5rem", color: "grey" }}
                        onClick={callLoginGoogle}
                    >
                        <img
                            src="https://res.cloudinary.com/dqonbozpq/image/upload/v1690478823/300221_gefm9o.png"
                            alt="Google"
                            style={{ width: "20px" }}
                        />
                        Iniciar con Google
                    </Button>
                    <Button
                        variant="outlined"
                        sx={{ gap: "0.5rem", color: "grey" }}
                        onClick={callLoginFacebook}
                    >
                        <img
                            src="https://res.cloudinary.com/dqonbozpq/image/upload/v1690480545/124010_udisf8.png"
                            alt="Facebook"
                            style={{ width: "20px" }}
                        />
                        Iniciar con Facebook
                    </Button>
                </div>
                <div>
                    <h3>
                        No esta registrado?
                        <Link to="../register"> Registrarse</Link>
                    </h3>
                </div>
            </form>
        </div>
    );
};

export default Login;
