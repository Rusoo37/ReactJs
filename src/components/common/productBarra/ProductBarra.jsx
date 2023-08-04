import React from "react";
import { Link, useParams } from "react-router-dom";

const ProductBarra = ({ item }) => {
    /* let { id } = useParams(); */
    return (
        <Link to={`./itemDetail/${item.id}`} sx={{ textDecoration: "none" }}>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2rem",
                    padding: "5px",
                }}
            >
                <img
                    src={item.img}
                    alt="imagen"
                    style={{ width: "50px", height: "50px" }}
                />
                <h4 style={{ width: "10rem" }}>{item.tittle}</h4>
                <h4>${item.price}</h4>
            </div>
        </Link>
    );
};

export default ProductBarra;
