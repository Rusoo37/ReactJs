import "./Navbar.css";
import CartWidget from "../../common/cartWidget/CartWidget";

const Navbar = () => {
    return (
        <div className="nav-container">
            <h2>Logo</h2>
            <ul className="categorias">
                <li>Nike</li>
                <li>Adiddas</li>
                <li>Puma</li>
            </ul>
            <div>
                <CartWidget />
            </div>
        </div>
    );
};

export default Navbar;
