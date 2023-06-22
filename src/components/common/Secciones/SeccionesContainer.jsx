import Secciones from "./Secciones";

const SeccionesContainer = () => {
    const marcas = ["Nike", "Adidas", "Puma"];
    function aparecer(id) {
        const btn = document.querySelector(`.cat-${id}`);
        btn.style.display == "none"
            ? (btn.style.display = "flex")
            : (btn.style.display = "none");
    }
    return <Secciones marcas={marcas} aparecer={aparecer} />;
};

export default SeccionesContainer;
