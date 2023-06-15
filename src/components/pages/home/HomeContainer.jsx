import { useState } from "react";
import Home from "./Home";

const HomeContainer = ({ nombre }) => {
    const [contador, setContador] = useState(0);
    const sumar = () => {
        setContador(contador + 1); //Funciona
    };
    return (
        <div>
            <Home
                nombre={nombre}
                contador={contador}
                setContador={setContador}
            />
        </div>
    );
};

export default HomeContainer;
