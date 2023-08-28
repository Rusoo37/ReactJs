import { Button, TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "./Register.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebaseConfig/firebaseConfig";

const Register = ({ showPass, showPassword, users, setUserId, addUser }) => {
    const { handleSubmit, handleChange, errors } = useFormik({
        initialValues: {
            nombre: "",
            email: "",
            password: "",
            repeat: "",
        },
        onSubmit: (data) => {
            let esta = users.some((user) => user.client.email === data.email);
            if (esta) {
                Swal.fire(
                    "Operación Fallida!",
                    "El email ya está en uso!",
                    "success"
                );
            } else {
                let user = {
                    client: data,
                    date: serverTimestamp(),
                };
                let usersCollection = collection(db, "users");
                addDoc(usersCollection, user).then((res) => setUserId(res.id));
                Swal.fire(
                    "Operación Exitosa!",
                    "Su registro salio con exito!",
                    "success"
                );
            }
        },
        onChange: (data) => {
            setUserData({ ...userData, [e.target.name]: e.target.value });
        },
        validationSchema: Yup.object({
            nombre: Yup.string()
                .min(5, "Debe tener al menos 5 carácteres")
                .required("Este campo es obligatorio"),
            email: Yup.string()
                .email("El email no es válido")
                .required("Este campo es obligatorio"),
            password: Yup.string()
                .min(8, "Debe tener al menos 8 carácteres")
                .required("Este campo es obligatorio"),
            repeat: Yup.string()
                .required("Este campo es obligatorio")
                .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
        }),
        validateOnChange: false,
    });
    return (
        <div className="container-register">
            <form onSubmit={handleSubmit} className="form-register">
                <div style={{ margin: "auto" }}>
                    <h2>Registrarse</h2>
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
                        label="Nombre"
                        variant="outlined"
                        name="nombre"
                        onChange={handleChange}
                        error={errors.nombre ? true : false}
                        helperText={errors.nombre}
                        sx={{ width: "15rem" }}
                    />
                </div>
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
                    className="inputs"
                    style={{
                        width: "110%",
                    }}
                >
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
                <div className="inputs">
                    <TextField
                        type={showPassword ? "text" : "password"}
                        label="Repetir contraseña"
                        variant="outlined"
                        name="repeat"
                        onChange={handleChange}
                        error={errors.repeat ? true : false}
                        helperText={errors.repeat}
                        sx={{ width: "15rem" }}
                    />
                </div>
                <Button
                    type="submit"
                    color="success"
                    variant="outlined"
                    sx={{ margin: "auto" }}
                >
                    Agregar Producto
                </Button>
            </form>
        </div>
    );
};

export default Register;
