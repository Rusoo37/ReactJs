import SearchIcon from "@mui/icons-material/Search";
import { Divider, IconButton, InputBase } from "@mui/material";

const BarraBusqueda = () => {
    return (
        <>
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Buscar.." />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </>
    );
};

export default BarraBusqueda;
