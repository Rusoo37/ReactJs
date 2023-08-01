import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig/firebaseConfig";
import {
    addDoc,
    collection,
    serverTimestamp,
    updateDoc,
    doc,
} from "firebase/firestore";
import { useFormik } from "formik";
import * as Yup from "yup";
import CheckOut from "./CheckOut";

const CheckOutContainer = () => {
    const [orderId, setOrderId] = useState("");

    const { cart, getTotalPrice, clearCart } = useContext(CartContext);

    let total = getTotalPrice();

    const { handleSubmit, handleChange, errors } = useFormik({
        initialValues: {
            nombre: "",
            apellido: "",
            email: "",
            phone: "",
            localidad: "",
        },
        onSubmit: (data) => {
            let order = {
                buyer: data,
                items: cart,
                total,
                date: serverTimestamp(),
            };

            let orderCollection = collection(db, "orders");
            addDoc(orderCollection, order).then((res) => setOrderId(res.id));

            cart.forEach((element) => {
                let refDoc = doc(db, "products", element.id);
                updateDoc(refDoc, { stock: element.stock - element.cantidad });
            });
            clearCart();
        },
        onChange: (data) => {
            setUserData({ ...userData, [e.target.name]: e.target.value });
        },
        validationSchema: Yup.object({
            nombre: Yup.string().required("Este campo es obligatorio"),
            apellido: Yup.string().required("Este campo es obligatorio"),
            email: Yup.string()
                .email("El email no es válido")
                .required("Este campo es obligatorio"),
            phone: Yup.number().required("Este campo es obligatorio"),
            localidad: Yup.string().required("Este campo es obligatorio"),
        }),
        validateOnChange: false,
    });

    return (
        <CheckOut
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            errors={errors}
            orderId={orderId}
            cart={cart}
            total={total}
        />
    );
};

export default CheckOutContainer;
