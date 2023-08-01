import { Table } from "@mui/material";

const TablaProducts = ({ product }) => {
    return (
        <Table>
            <h4>
                <strong>{product.tittle}</strong>
            </h4>
            <h4>
                <strong>{product.description}</strong>
            </h4>
            <h4>
                <strong>{product.price}</strong>
            </h4>
            <h4>
                <strong>{product.stock}</strong>
            </h4>
            <h4>
                <strong>{product.img}</strong>
            </h4>
        </Table>
    );
};

export default TablaProducts;
