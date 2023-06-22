import Navbar from "./components/layout/Navbar/Navbar";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import { useState } from "react";
function App() {
    const [mostrarComponente, setMostrarComponente] = useState(false);
    return (
        <div>
            <Navbar />
            {/* <button onClick={() => setMostrarComponente(!mostrarComponente)}>
                Montar/desmontar componente
            </button> */}

            <ItemDetailContainer />
        </div>
    );
}

export default App;
