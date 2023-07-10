import { useEffect, useState } from "react";
import { products } from "../../../ProductMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { categoryName } = useParams();

    useEffect(() => {
        let productosFiltados = products.filter(
            (elemento) => elemento.category === categoryName
        );
        const tarea = new Promise((resolve, reject) => {
            resolve(categoryName ? productosFiltados : products);
        });
        tarea
            .then((respuesta) => {
                setItems(respuesta);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [categoryName]);

    return (
        <div>
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;
