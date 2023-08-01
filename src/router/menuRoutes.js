import CartContainer from "../components/pages/cart/CartContainer";
import CheckOutContainer from "../components/pages/checkout/CheckOutContainer";
import DashboardContainer from "../components/pages/dashboard/DashboardContainer";
import ItemDetailContainer from "../components/pages/itemDetail/ItemDetailContainer";
import ItemListContainer from "../components/pages/itemList/ItemListContainer";
import LoginContainer from "../components/pages/login/LoginContainer";
import RegisterContainer from "../components/pages/register/RegisterContainer";

export const routes = [
    {
        id: "home",
        path: "/",
        Element: ItemListContainer,
    },
    {
        id: "category",
        path: "/category/:categoryName",
        Element: ItemListContainer,
    },
    {
        id: "detail",
        path: "/itemDetail/:id",
        Element: ItemDetailContainer,
    },
    {
        id: "cart",
        path: "/cart",
        Element: CartContainer,
    },
    {
        id: "login",
        path: "/login",
        Element: LoginContainer,
    },
    {
        id: "checkout",
        path: "/checkout",
        Element: CheckOutContainer,
    },
    {
        id: "register",
        path: "/register",
        Element: RegisterContainer,
    },
    {
        id: "dashboard",
        path: "/dashboard",
        Element: DashboardContainer,
    },
];
