import ItemList from "./ItemList";

const ItemListContainer = () => {
    const marcas = ["Nike", "Adidas", "Puma"];
    function aparecer(id) {
        const btn = document.querySelector(`.cat-${id}`);
        btn.style.display == "none"
            ? (btn.style.display = "flex")
            : (btn.style.display = "none");
    }
    return <ItemList marcas={marcas} aparecer={aparecer} />;
};

export default ItemListContainer;
