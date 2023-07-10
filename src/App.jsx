import Navbar from "./components/layout/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import NotFoundContainer from "./components/pages/notFound/NotFoundContainer";
import Login from "./components/pages/login/Login";
function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<Navbar />}>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route
                            path="/category/:categoryName"
                            element={<ItemListContainer />}
                        />
                        <Route
                            path="/itemDetail/:id"
                            element={<ItemDetailContainer />}
                        />
                        <Route path="/cart" element={<CartContainer />} />
                        <Route path="/login" element={<Login />} />
                    </Route>
                    <Route path="*" element={<NotFoundContainer />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
