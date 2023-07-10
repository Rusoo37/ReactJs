import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
        <>
            <Badge badgeContent={4} color="success">
                <Link to="/cart">
                    <ShoppingCartIcon color="info" />
                </Link>
            </Badge>
        </>
    );
};

export default CartWidget;
