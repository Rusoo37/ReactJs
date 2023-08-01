import { Button, Typography } from "@mui/material";
import "./Dashboard.css";

const Dashboard = ({ showProductos, showOrdenes, showUsers, enProceso }) => {
    return (
        <div className="buttons-dashboard">
            <Button variant="outlined" onClick={enProceso}>
                Mostrar Clientes
            </Button>
            <Button variant="outlined" onClick={showProductos}>
                Mostrar Productos
            </Button>
            <Button variant="outlined" onClick={showOrdenes}>
                Mostrar Ordenes
            </Button>
        </div>
    );
};

export default Dashboard;
