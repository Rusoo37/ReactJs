import Dashboard from "./Dashboard";
import "./Dashboard.css";
import { db } from "../../../firebaseConfig/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import TablaProducts from "../../common/menuTabla/TablaProducts";

const DashboardContainer = ({}) => {
    const [ordersDash, setOrdersDash] = useState([]);
    const [productsDash, setProductDash] = useState([]);
    const [usersDash, setUsersDash] = useState([]);

    useEffect(() => {
        let ordersCollection = collection(db, "orders");
        let productsCollection = collection(db, "products");
        let usersCollection = collection(db, "users");
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

    const showProductos = () => {
        productsDash.length > 0 ? (
            productsDash.map((product) => {
                {
                    <TablaProducts product={product} />;
                }
            })
        ) : (
            <h2>No hay productos</h2>
        );
    };
    const showOrdenes = () => {
        ordersDash.length > 0 ? (
            ordersDash.map((order) => {
                console.log(order.buyer);
            })
        ) : (
            <h3>No hay ordenes</h3>
        );
    };
    const showUsers = () => {
        usersDash.length > 0 ? (
            usersDash.map((user) => {
                console.log(user.id);
            })
        ) : (
            <h3>No hay usuarios registrados</h3>
        );
    };
    const enProceso = () => {
        alert("La funcion de users esta en proceso..");
    };

    return (
        <div className="opciones-dashboard">
            <Dashboard
                showProductos={showProductos}
                showOrdenes={showOrdenes}
                showUsers={showUsers}
                enProceso={enProceso}
            />
            ;
        </div>
    );
};

export default DashboardContainer;
