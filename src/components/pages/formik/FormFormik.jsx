import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormFormik = () => {
    const { handleSubmit, handleChange, errors } = useFormik({
        initialValues: {
            nombre: "",
            email: "",
            password: "",
        },
        onSubmit: (data) => {
            console.log(data);
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
        }),
        validateOnChange: false,
    });

    return (
        <div
            style={{
                marginTop: "10px",
                width: "100%",
            }}
        >
            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "20px",
                }}
            >
                <TextField
                    label="Nombre"
                    variant="outlined"
                    name="nombre"
                    onChange={handleChange}
                    error={errors.nombre ? true : false}
                    helperText={errors.nombre}
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    name="email"
                    onChange={handleChange}
                    error={errors.email ? true : false}
                    helperText={errors.email}
                />
                <TextField
                    label="Pass"
                    variant="outlined"
                    name="password"
                    onChange={handleChange}
                    error={errors.password ? true : false}
                    helperText={errors.password}
                />

                <Button type="submit" variant="contained">
                    Enviar
                </Button>
            </form>
        </div>
    );
};

export default FormFormik;
