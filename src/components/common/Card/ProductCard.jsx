import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const productCard = ({ item }) => {
    return (
        <div key={item.id}>
            <Card
                sx={{
                    width: { xs: 200, sm: 280, md: 300 },
                    height: { xs: 300, sm: 350, md: 400 },
                }}
            >
                <CardMedia
                    sx={{ height: { xs: "50%", sm: "60%", md: "60%" } }}
                    image={item.img}
                />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        height: { xs: "50%", sm: "40%", md: "40%" },
                    }}
                >
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.tittle}
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{ marginBottom: "-20px", marginTop: "20px" }}
                        >
                            ${item.price}
                        </Typography>
                    </CardContent>
                    <CardActions
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Link to={`/itemDetail/${item.id}`}>
                            <Button>Ver más</Button>
                        </Link>
                    </CardActions>
                </Box>
            </Card>
        </div>
    );
};

export default productCard;
