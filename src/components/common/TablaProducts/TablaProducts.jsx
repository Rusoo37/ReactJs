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

const TablaProducts = ({ productsDash, eliminarById }) => {
    return (
        <Paper>
            <Typography variant="h4">Productos</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Tittle</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Stock</TableCell>
                        <TableCell>Color</TableCell>
                        <TableCell>Imagen</TableCell>
                        <TableCell>Descripcion</TableCell>
                        <TableCell>Editar</TableCell>
                        <TableCell>Eliminar</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {productsDash.length > 0 &&
                        productsDash.map((item) => (
                            <TableRow>
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
                                    <Button>
                                        <EditIcon />
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button onClick={() => eliminarById(item)}>
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
