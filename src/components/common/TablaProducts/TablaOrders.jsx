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

const TablaOrders = ({ ordersDash, eliminarOrderById }) => {
    return (
        <Paper>
            <Typography variant="h4">Órdenes</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Apellido</TableCell>
                        <TableCell>Nicolas</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Localidad</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Eliminar</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {ordersDash.length > 0 &&
                        ordersDash.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.buyer.apellido}</TableCell>
                                <TableCell>{item.buyer.nombre}</TableCell>
                                <TableCell>{item.buyer.email}</TableCell>
                                <TableCell>{item.buyer.localidad}</TableCell>
                                <TableCell>{item.buyer.phone}</TableCell>
                                <TableCell>
                                    <Button
                                        onClick={() => eliminarOrderById(item)}
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

export default TablaOrders;
