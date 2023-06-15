import HomeContainer from "./components/pages/home/HomeContainer";
import Navbar from "./components/layout/Navbar/Navbar";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
function App() {
    let nombre = "Nicolas";
    return (
        <div>
            <Navbar />
            <HomeContainer nombre={nombre} />
            <ItemListContainer />
        </div>
    );
}

export default App;
