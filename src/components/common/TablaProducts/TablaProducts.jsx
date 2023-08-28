import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

const TablaProducts = ({ productsDash, eliminarProductById }) => {
    return (
        <Paper>
            <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
                Productos
            </Typography>
            <Link to="./../agregarDocumento">
                <Button variant="outlined">Agregar Producto</Button>
            </Link>
            <Table sx={{ marginTop: "1rem" }}>
                <TableHead>
                    <TableRow>
                        <TableCell>Tittle</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Stock</TableCell>
                        <TableCell>Color</TableCell>
                        <TableCell>Imagen</TableCell>
                        <TableCell>Descripcion</TableCell>
                        <TableCell>Eliminar</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {productsDash.length > 0 &&
                        productsDash.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.tittle}</TableCell>
                                <TableCell>{item.price}</TableCell>
                                <TableCell>{item.stock}</TableCell>
                                <TableCell>{item.color}</TableCell>
                                <TableCell>{item.img}</TableCell>
                                <TableCell>
                                    <div style={{ width: "10rem" }}>
                                        {item.description}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Button
                                        onClick={() =>
                                            eliminarProductById(item)
                                        }
                                    >
                                        <DeleteIcon />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </Paper>
    );
};

export default TablaProducts;
