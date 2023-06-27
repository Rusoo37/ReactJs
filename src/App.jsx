import Navbar from "./components/layout/Navbar/Navbar";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import { useState } from "react";
function App() {
    const [mostrarComponente, setMostrarComponente] = useState(false);
    return (
        <div>
            <Navbar />
            <ItemListContainer />
        </div>
    );
}

export default App;
