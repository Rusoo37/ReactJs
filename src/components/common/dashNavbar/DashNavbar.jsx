import { Link } from "react-router-dom";

const DashNavbar = () => {
    return (
        <Link
            to="/dashboard"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <h4 style={{ color: "white" }}>Dashboard</h4>
        </Link>
    );
};

export default DashNavbar;
