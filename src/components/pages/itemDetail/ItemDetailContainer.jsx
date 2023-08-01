import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import { db } from "../../../firebaseConfig/firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const { addToCart, getQuantityById } = useContext(CartContext);

    const [product, setProduct] = useState({});

    let { id } = useParams();

    let cantidadEnCarrito = getQuantityById(id);

    const notify = () =>
        toast.success("Agregado al carrito!", {
            position: toast.POSITION.BOTTOM_RIGHT,
        });

    useEffect(() => {
        let refCollection = collection(db, "products");
        let refDoc = doc(refCollection, id);
        getDoc(refDoc).then((res) => setProduct({ ...res.data(), id: res.id }));
    }, [id]);

    const agregarAlCarrito = (cant) => {
        let data = {
            ...product,
            cantidad: cant,
        };
        notify();
        addToCart(data);
    };

    return (
        <div>
            <ItemDetail
                product={product}
                key={product.id}
                setProduct={setProduct}
                agregarAlCarrito={agregarAlCarrito}
                cantidadEnCarrito={cantidadEnCarrito}
            />
        </div>
    );
};

export default ItemDetailContainer;
