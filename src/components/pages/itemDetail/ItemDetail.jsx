import { Typography, CardMedia, Card, Box } from "@mui/material";
import * as React from "react";
import CounterContainer from "../../common/Counter/CounterContainer";
import "./ItemDetail.css";

const ItemDetail = ({ product, agregarAlCarrito }) => {
    return (
        <div className="container-detail">
            <Box
                sx={{
                    height: { xs: 300, md: 400, sm: 600 },
                    width: { xs: 400, sm: 600, md: 800 },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div className="details">
                    <div className="img-part">
                        <Card>
                            <CardMedia
                                sx={{ height: { xs: 180, sm: 300, md: 400 } }}
                                component="img"
                                alt={product.tittle}
                                src={product.img}
                            />
                        </Card>
                    </div>
                    <div className="info-product">
                        <h2>{product.tittle}</h2>
                        <Typography
                            sx={{ width: { xs: 200, sm: 300, md: 400 } }}
                        >
                            {product.description}
                        </Typography>
                        <h3>$ {product.price}</h3>
                        <CounterContainer
                            stock={product.stock}
                            agregarAlCarrito={agregarAlCarrito}
                        />
                    </div>
                </div>
            </Box>
        </div>
    );
};

export default ItemDetail;
