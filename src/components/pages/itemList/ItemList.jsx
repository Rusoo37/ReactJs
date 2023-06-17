import { Button } from "@mui/material";
import "./ItemList.css";

const ItemList = ({ marcas, aparecer }) => {
    const [m1, m2, m3] = marcas;
    return (
        <>
            <div>
                <Button
                    sx={{
                        height: { xs: "1rem", sm: "2rem", md: "3rem" },
                        width: { xs: "1rem", sm: "2rem", md: "3rem" },
                        color: "white",
                    }}
                    id="btn1"
                    className="btn"
                    onClick={() => aparecer(1)}
                >
                    {m1}
                </Button>
                <ul className="cat cat-1" style={{ display: "none" }}>
                    <li>Mercurial</li>
                    <li>Phantom</li>
                    <li>Tiempo</li>
                </ul>
            </div>
            <div>
                <Button
                    sx={{
                        height: { xs: "1rem", sm: "2rem", md: "3rem" },
                        width: { xs: "1rem", sm: "2rem", md: "3rem" },
                        color: "white",
                    }}
                    id="btn2"
                    className="btn"
                    onClick={() => aparecer(2)}
                >
                    {m2}
                </Button>
                <ul className="cat cat-2" style={{ display: "none" }}>
                    <li>Predator</li>
                    <li>X speedflow</li>
                    <li>Copa</li>
                </ul>
            </div>
            <div>
                <Button
                    sx={{
                        height: { xs: "1rem", sm: "2rem", md: "3rem" },
                        width: { xs: "1rem", sm: "2rem", md: "3rem" },
                        color: "white",
                    }}
                    id="btn3"
                    className="btn"
                    onClick={() => aparecer(3)}
                >
                    {m3}
                </Button>
                <ul className="cat cat-3" style={{ display: "none" }}>
                    <li>Future</li>
                    <li>Ultra</li>
                    <li>Borussia</li>
                </ul>
            </div>
        </>
    );
};

export default ItemList;
