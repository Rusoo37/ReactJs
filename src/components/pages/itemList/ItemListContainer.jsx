import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    const [edad, setEdad] = useState(18);

    /* VARIANTE 1
    useEffect(() => {
        console.log("Llamado a la API");
    }, []); --> Array de dependencias
    */

    /* VARIANTE 2
    useEffect(() => {
        console.log("Llamado a la API");
    }, [edad]); --> Vuelve a renderizarse con edad
    */

    return (
        <div>
            <ItemList
                edad={edad}
                setEdad={setEdad}
                products={products}
                setProducts={setProducts}
            />
        </div>
    );
};

export default ItemListContainer;
