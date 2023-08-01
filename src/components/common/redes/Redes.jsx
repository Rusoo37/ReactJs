import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
const Redes = () => {
    return (
        <div style={{ display: "flex", gap: "10px" }}>
            <WhatsAppIcon sx={{ color: "white" }} />
            <FacebookIcon sx={{ color: "white" }} />
            <InstagramIcon sx={{ color: "white" }} />
        </div>
    );
};

export default Redes;
