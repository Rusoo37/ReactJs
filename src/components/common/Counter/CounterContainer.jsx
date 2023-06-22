import React, { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ stock, agregarAlCarrito }) => {
    const [contador, setContador] = useState(1);
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
