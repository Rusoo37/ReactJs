import React, { useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({
        id: 1,
        name: "telefono",
        price: 220,
        stock: 5,
    });

    const agregarAlCarrito = (cant) => {
        let data = {
            ...product,
            quantity: cant,
        };
        console.log(data);
    };

    return (
        <div>
            <ItemDetail
                product={product}
                setProduct={setProduct}
                agregarAlCarrito={agregarAlCarrito}
            />
        </div>
    );
};

export default ItemDetailContainer;
