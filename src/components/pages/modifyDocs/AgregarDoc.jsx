import { Button, TextField } from "@mui/material";
import "./AgregarDoc.css";
import { Link } from "react-router-dom";

const AgregarDoc = ({ handleSubmit, handleChange, errors }) => {
    return (
        <div className="container-addDoc">
            <form onSubmit={handleSubmit} className="form-addDoc">
                <div style={{ margin: "auto" }}>
                    <h2>Agregar Producto</h2>
                </div>
                <div
                    style={{
                        backgroundColor: "#cacaca",
                        height: "2px",
                        width: "100%",
                        marginBottom: "10px",
                    }}
                ></div>
                <div className="inputs-addDoc">
                    <TextField
                        label="Titulo"
                        variant="outlined"
                        name="tittle"
                        onChange={handleChange}
                        error={errors.tittle ? true : false}
                        helperText={errors.tittle}
                        sx={{ width: "15rem" }}
                    />
                </div>
                <div className="inputs-addDoc">
                    <TextField
                        label="Precio"
                        variant="outlined"
                        name="price"
                        onChange={handleChange}
                        error={errors.price ? true : false}
                        helperText={errors.price}
                        sx={{ width: "15rem" }}
                    />
                </div>
                <div className="inputs-addDoc">
                    <TextField
                        label="Stock"
                        variant="outlined"
                        name="stock"
                        onChange={handleChange}
                        error={errors.stock ? true : false}
                        helperText={errors.stock}
                        sx={{ width: "15rem" }}
                    />
                </div>
                <div className="inputs-addDoc">
                    <TextField
                        label="Color"
                        variant="outlined"
                        name="color"
                        onChange={handleChange}
                        error={errors.color ? true : false}
                        helperText={errors.color}
                        sx={{ width: "15rem" }}
                    />
                </div>
                <div className="inputs-addDoc">
                    <TextField
                        label="Imagen"
                        variant="outlined"
                        name="img"
                        onChange={handleChange}
                        error={errors.img ? true : false}
                        helperText={errors.img}
                        sx={{ width: "15rem" }}
                    />
                </div>
                <div className="inputs-addDoc">
                    <TextField
                        label="Descripcion"
                        variant="outlined"
                        name="description"
                        onChange={handleChange}
                        error={errors.description ? true : false}
                        helperText={errors.description}
                        sx={{ width: "15rem" }}
                    />
                </div>
                <Button
                    type="submit"
                    color="success"
                    variant="outlined"
                    sx={{ margin: "auto" }}
                >
                    Agregar Producto
                </Button>
            </form>
        </div>
    );
};

export default AgregarDoc;
