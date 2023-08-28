import { addDoc, collection } from "firebase/firestore";
import AgregarDoc from "./AgregarDoc";
import { db } from "../../../firebaseConfig/firebaseConfig";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

const AgregarDocContainer = () => {
    const { handleSubmit, handleChange, errors } = useFormik({
        initialValues: {
            tittle: "",
            price: "",
            stock: "",
            color: "",
            img: "",
            description: "",
        },
        onSubmit: (data) => {
            let usersCollection = collection(db, "products");
            addDoc(usersCollection, data).then((res) =>
                Swal.fire("Operación Exitosa!", "Producto agregado!", "success")
            );
        },
        onChange: (data) => {
            setUserData({ ...userData, [e.target.name]: e.target.value });
        },
        validationSchema: Yup.object({
            tittle: Yup.string()
                .min(8, "Debe tener al menos 8 carácteres")
                .required("Este campo es obligatorio"),
            price: Yup.number(),
            stock: Yup.number().required("Este campo es obligatorio"),
            color: Yup.string().required("Este campo es obligatorio"),
            img: Yup.string().required("Este campo es obligatorio"),
            description: Yup.string().required("Este campo es obligatorio"),
        }),
        validateOnChange: false,
    });
    return (
        <AgregarDoc
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            errors={errors}
        />
    );
};

export default AgregarDocContainer;
