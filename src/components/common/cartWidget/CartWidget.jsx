import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
    return (
        <Badge badgeContent={4} color="success">
            <ShoppingCartIcon color="info" />
        </Badge>
    );
};

export default CartWidget;
