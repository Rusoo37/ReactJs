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

const TablaUsers = ({ usersDash }) => {
    return (
        <Paper>
            <Typography variant="h4">Usuarios</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Nicolas</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Password</TableCell>
                        <TableCell>Repeat</TableCell>
                        <TableCell>Editar</TableCell>
                        <TableCell>Eliminar</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {usersDash.length > 0 &&
                        usersDash.map((item) => (
                            <TableRow key={item.client.email}>
                                <TableCell>{item.client.nombre}</TableCell>
                                <TableCell>{item.client.email}</TableCell>
                                <TableCell>{item.client.password}</TableCell>
                                <TableCell>{item.client.repeat}</TableCell>
                                <TableCell>
                                    <Button>
                                        <EditIcon />
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button>
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

export default TablaUsers;
