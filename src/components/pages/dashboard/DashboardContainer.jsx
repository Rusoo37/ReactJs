import Dashboard from "./Dashboard";
import "./Dashboard.css";
import { db } from "../../../firebaseConfig/firebaseConfig";
import {
    collection,
    deleteDoc,
    doc,
    getDocs,
    setDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";

const DashboardContainer = ({}) => {
    const [ordersDash, setOrdersDash] = useState([]);
    const [productsDash, setProductDash] = useState([]);
    const [usersDash, setUsersDash] = useState([]);

    let ordersCollection = collection(db, "orders");
    let productsCollection = collection(db, "products");
    let usersCollection = collection(db, "users");
    useEffect(() => {
        getDocs(productsCollection).then((res) => {
            let newArrProducts = res.docs.map((product) => {
                return { ...product.data() };
            });
            setProductDash(newArrProducts);
        });
        getDocs(ordersCollection).then((res) => {
            let newArrOrders = res.docs.map((order) => {
                return { ...order.data() };
            });
            setOrdersDash(newArrOrders);
        });

        getDocs(usersCollection).then((res) => {
            let newArrUsers = res.docs.map((user) => {
                return { ...user.data() };
            });
            setUsersDash(newArrUsers);
        });
    }, []);

    const eliminarById = (item) => {
        getDocs(productsCollection).then((res) => {
            let newArrProducts = res.docs.map((product) => {
                if (product.data().tittle == item.tittle) {
                    deleteDoc(doc(db, "products", product.id));
                }
            });
        });
    };

    return (
        <div className="opciones-dashboard">
            <Dashboard
                ordersDash={ordersDash}
                productsDash={productsDash}
                usersDash={usersDash}
                eliminarById={eliminarById}
            />
            ;
        </div>
    );
};

export default DashboardContainer;
