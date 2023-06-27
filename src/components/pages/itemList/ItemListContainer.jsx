import { useEffect, useState } from "react";
import { products } from "../../../ProductMock";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const tarea = new Promise((resolve, reject) => {
            resolve(products);
        });
        tarea
            .then((respuesta) => {
                setItems(respuesta);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;
