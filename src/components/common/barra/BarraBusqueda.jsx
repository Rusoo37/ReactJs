import SearchIcon from "@mui/icons-material/Search";
import { Box, Divider, IconButton, InputBase } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig/firebaseConfig";
import "./BarraBusqueda.css";
import ProductBarra from "../productBarra/ProductBarra";

const BarraBusqueda = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        let productsCollection = collection(db, "products");
        getDocs(productsCollection).then((res) => {
            let newArr = res.docs.map((product) => {
                return { ...product.data(), id: product.id };
            });
            setProducts(newArr);
        });

        const buscarResultados = () => {
            let productosFiltrados = products.filter((product) =>
                product.tittle.toLowerCase().includes(searchTerm)
            );
            setResults(productosFiltrados);
        };

        if (searchTerm) {
            buscarResultados();
        } else {
            setResults([]);
        }
    }, [searchTerm]);

    return (
        <div className="containerBarra">
            <div className="containerBusqueda">
                <InputBase
                    sx={{ ml: 1, flex: 1, height: "50%" }}
                    placeholder="Buscar.."
                    onChange={handleSearchChange}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton
                    type="button"
                    sx={{ p: "10px" }}
                    aria-label="search"
                >
                    <SearchIcon />
                </IconButton>
            </div>
            {results.length > 0 && (
                <Box
                    className="ulBarra"
                    sx={{
                        left: { xs: "19%", sm: "15.5%", md: "16.9%" },
                        width: { xs: "200px", sm: 300, md: 400 },
                    }}
                >
                    {results.length > 0 &&
                        results.map((item) => (
                            <ProductBarra key={item.id} item={item} />
                        ))}
                </Box>
            )}
        </div>
    );
};

export default BarraBusqueda;
