import React from "react";
import CounterContainer from "../../common/Counter/CounterContainer";

const ItemDetail = ({ product, agregarAlCarrito }) => {
    return (
        <div>
            <h4>{product.name}</h4>
            <h6>{product.price}</h6>
            <CounterContainer
                stock={product.stock}
                agregarAlCarrito={agregarAlCarrito}
            />
        </div>
    );
};

export default ItemDetail;
