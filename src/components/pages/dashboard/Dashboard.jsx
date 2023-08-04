import { Button, Typography } from "@mui/material";
import "./Dashboard.css";
import TablaProducts from "../../common/TablaProducts/TablaProducts";
import { useState } from "react";
import TablaOrders from "../../common/TablaProducts/TablaOrders";
import TablaUsers from "../../common/TablaProducts/TablaUsers";

const Dashboard = ({ ordersDash, productsDash, usersDash, eliminarById }) => {
    const [titulo, setTitulo] = useState("");
    const [showProducts, setShowProducts] = useState(false);
    const [showOrders, setShowOrders] = useState(false);
    const [showUsers, setShowUsers] = useState(false);

    const mostrar = (id) => {
        if (id === "products") {
            setShowProducts(!showProducts);
        } else {
            if (id === "orders") {
                setShowOrders(!showOrders);
            } else {
                setShowUsers(!showUsers);
            }
        }
        setTitulo(id);
    };

    return (
        <div className="container-secciones-dash">
            <div className="buttons-dash">
                <Button onClick={() => mostrar("products")}>
                    Mostrar Productos
                </Button>
                <Button onClick={() => mostrar("orders")}>
                    Mostrar Ordenes
                </Button>
                <Button onClick={() => mostrar("users")}>
                    Mostrar Usuarios
                </Button>
            </div>
            <div
                className="information-dashboard"
                style={{ maxHeight: "30rem" }}
            >
                {showProducts && (
                    <TablaProducts
                        productsDash={productsDash}
                        eliminarById={eliminarById}
                    />
                )}
            </div>
            <div className="information-dashboard">
                {showOrders && <TablaOrders ordersDash={ordersDash} />}
            </div>
            <div
                className="information-dashboard"
                style={{ marginBottom: "5rem" }}
            >
                {showUsers && <TablaUsers usersDash={usersDash} />}
            </div>
        </div>
    );
};

export default Dashboard;
