import { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const existe = cart.some((elemento) => elemento.id == product.id);
        if (existe) {
            let newArr = cart.map((elemento) => {
                if (product.id === elemento.id) {
                    return {
                        ...elemento,
                        cantidad: product.cantidad++,
                    };
                } else {
                    return elemento;
                }
            });
            setCart(newArr);
        } else {
            setCart([...cart, product]);
        }
    };

    const clearCart = () => {
        setCart([]);
    };

    const deleteById = (id) => {
        let newArr = cart.filter((elemento) => elemento.id !== id);
        setCart(newArr);
    };

    //RETORNAR EL TOTAL DE CANTIDADES

    const getTotalQuantity = () => {
        let total = cart.reduce((acc, elemento) => {
            return acc + elemento.cantidad;
        }, 0);
        return total;
    };

    //RETORNAR EL TOTAL DE PLATA

    const getTotalPrice = () => {
        let total = cart.reduce((acc, elemento) => {
            return acc + elemento.cantidad * elemento.price;
        }, 0);
        return total;
    };

    //DADO UN ID, SABER LAS CANTIDADES QUE HAY

    const getQuantityById = (id) => {
        let producto = cart.find((elemento) => elemento.id === +id);
        return producto?.cantidad;
    };

    let data = {
        cart,
        addToCart,
        clearCart,
        deleteById,
        getTotalQuantity,
        getTotalPrice,
        getQuantityById,
    };

    return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
