import Dashboard from "./Dashboard";
import "./Dashboard.css";
import { db } from "../../../firebaseConfig/firebaseConfig";
import {
    collection,
    deleteDoc,
    doc,
    getDocs,
    updateDoc,
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
                return { ...product.data(), id: product.id };
            });
            setProductDash(newArrProducts);
        });
        getDocs(ordersCollection).then((res) => {
            let newArrOrders = res.docs.map((order) => {
                return { ...order.data(), id: order.id };
            });
            setOrdersDash(newArrOrders);
        });

        getDocs(usersCollection).then((res) => {
            let newArrUsers = res.docs.map((user) => {
                return { ...user.data(), id: user.id };
            });
            setUsersDash(newArrUsers);
        });
    }, []);

    const eliminarProductById = (item) => {
        getDocs(productsCollection).then((res) => {
            let newArrProducts = res.docs.map((product) => {
                if (product.id == item.id) {
                    deleteDoc(doc(db, "products", product.id));
                }
            });
        });
    };

    const eliminarUserById = (item) => {
        getDocs(usersCollection).then((res) => {
            let newArrProducts = res.docs.map((user) => {
                if (user.id == item.id) {
                    console.log("se elimino");
                    deleteDoc(doc(db, "users", user.id));
                }
            });
        });
    };
    const eliminarOrderById = (item) => {
        getDocs(ordersCollection).then((res) => {
            let newArrProducts = res.docs.map((order) => {
                if (order.id == item.id) {
                    deleteDoc(doc(db, "orders", item.id));
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
                eliminarProductById={eliminarProductById}
                eliminarOrderById={eliminarOrderById}
                eliminarUserById={eliminarUserById}
            />
            ;
        </div>
    );
};

export default DashboardContainer;
