import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig/firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { categoryName } = useParams();

    useEffect(() => {
        let productsCollection = collection(db, "products");

        let consulta;
        if (!categoryName) {
            consulta = productsCollection;
        } else {
            consulta = query(
                productsCollection,
                where("category", "==", categoryName)
            );
        }

        getDocs(consulta).then((res) => {
            let newArr = res.docs.map((product) => {
                return { ...product.data(), id: product.id };
            });
            setItems(newArr);
        });
    }, [categoryName]);

    return (
        <div>
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;
