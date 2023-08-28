import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import CartContextComponent from "./context/CartContext";
import LoginContextComponent from "./context/LoginContext";
function App() {
    return (
        <div>
            <BrowserRouter>
                <LoginContextComponent>
                    <CartContextComponent>
                        <AppRouter />
                    </CartContextComponent>
                </LoginContextComponent>
            </BrowserRouter>
        </div>
    );
}

export default App;
