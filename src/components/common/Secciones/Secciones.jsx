import { Button } from "@mui/material";
import "./Secciones.css";
import { Link } from "react-router-dom";

const Secciones = ({ marcas, aparecer }) => {
    const [m1, m2, m3] = marcas;
    return (
        <>
            <div>
                <Link to="/category/nike">
                    <Button
                        sx={{
                            height: { xs: "1rem", sm: "2rem", md: "3rem" },
                            width: { xs: "1rem", sm: "2rem", md: "3rem" },
                            color: "white",
                        }}
                        id="btn1"
                        className="btn"
                    >
                        {m1}
                    </Button>
                </Link>
            </div>
            <div>
                <Link to="/category/adidas">
                    <Button
                        sx={{
                            height: { xs: "1rem", sm: "2rem", md: "3rem" },
                            width: { xs: "1rem", sm: "2rem", md: "3rem" },
                            color: "white",
                        }}
                        id="btn2"
                        className="btn"
                    >
                        {m2}
                    </Button>
                </Link>
            </div>
            <div>
                <Link to="/category/puma">
                    <Button
                        sx={{
                            height: { xs: "1rem", sm: "2rem", md: "3rem" },
                            width: { xs: "1rem", sm: "2rem", md: "3rem" },
                            color: "white",
                        }}
                        id="btn3"
                        className="btn"
                    >
                        {m3}
                    </Button>
                </Link>
            </div>
        </>
    );
};

export default Secciones;
