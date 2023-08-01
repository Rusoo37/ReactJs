import Swal from "sweetalert2";
import Cart from "./Cart";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartContainer = () => {
    const { clearCart } = useContext(CartContext);
    let limpiar = () => {
        Swal.fire({
            title: "Esta seguro?",
            text: "Se eliminara el contenido del carrito!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, seguro!",
        }).then((result) => {
            if (result.isConfirmed) {
                clearCart();
                Swal.fire("Eliminado!", "El carrito esta vacio.", "success");
            }
        });
    };

    return (
        <div>
            <Cart limpiar={limpiar} />
        </div>
    );
};

export default CartContainer;
