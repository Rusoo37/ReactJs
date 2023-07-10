import React from "react";
import { Button } from "@mui/material";
import Logo from "../../common/logo/Logo";
import "./NotFound.css";
import { Link } from "react-router-dom";
import Unsatisfied from "@mui/icons-material/SentimentVeryDissatisfied";

const NotFoundContainer = () => {
    return (
        <div>
            <div className="miniNav">
                <Link to="/">
                    <Logo />
                </Link>
            </div>
            <div className="miniBody">
                <div className="items">
                    <Unsatisfied sx={{ fontSize: "100px" }} />
                    <h2>Ups! Esta página al parecer no existe.</h2>
                    <Link to="/" className="back">
                        <Button>Volver</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundContainer;
