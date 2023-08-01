import { useState, createContext } from "react";

export const LoginContext = createContext();
const LoginContextComponent = ({ children }) => {
    const [user, setUser] = useState([]);

    let data = {
        user,
    };

    return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default LoginContextComponent;
