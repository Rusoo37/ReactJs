import { useState } from "react";
import Counter from "./Counter";
import "react-toastify/dist/ReactToastify.css";

const CounterContainer = ({
    stock,
    agregarAlCarrito,
    cantidadEnCarrito = 1,
}) => {
    const [contador, setContador] = useState(cantidadEnCarrito);

    return (
        <div>
            <Counter
                stock={stock}
                contador={contador}
                setContador={setContador}
                agregarAlCarrito={agregarAlCarrito}
            />
        </div>
    );
};

export default CounterContainer;
