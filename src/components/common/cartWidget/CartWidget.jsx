import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
    const { getTotalQuantity } = useContext(CartContext);
    let total = getTotalQuantity();
    return (
        <>
            <Badge badgeContent={total} color="success" showZero>
                <Link to="/cart">
                    <ShoppingCartIcon color="info" />
                </Link>
            </Badge>
        </>
    );
};

export default CartWidget;
