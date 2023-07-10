import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../ProductMock";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    let { id } = useParams();
    useEffect(() => {
        let promesa = new Promise((resolve, reject) => {
            let productSelected = products.find(
                (product) => product.id === +id
            );
            resolve(productSelected);
        });
        promesa
            .then((res) => {
                setProduct(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const agregarAlCarrito = (cant) => {
        let data = {
            ...product,
            quantity: cant,
        };
    };
    return (
        <div>
            <ItemDetail
                product={product}
                key={product.id}
                setProduct={setProduct}
                agregarAlCarrito={agregarAlCarrito}
            />
        </div>
    );
};

export default ItemDetailContainer;
