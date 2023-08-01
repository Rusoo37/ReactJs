import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./Contactos.css";

const Contactos = () => {
    return (
        <div className="container-secciones">
            <div className="secciones-contactos">
                <WhatsAppIcon sx={{ color: "white" }} />
                <h4 style={{ color: "white" }}>2262486975</h4>
            </div>
            <div className="secciones-contactos">
                <MailOutlineIcon sx={{ color: "white" }} />
                <h4 style={{ color: "white" }}>nicoruso@outlook.com</h4>
            </div>
            <div className="secciones-contactos">
                <PhoneIcon sx={{ color: "white" }} />
                <h4 style={{ color: "white" }}>2262486975</h4>
            </div>
            <div className="secciones-contactos">
                <PlaceIcon sx={{ color: "white" }} />
                <h4 style={{ color: "white" }}>Necochea, Buenos Aires.</h4>
            </div>
        </div>
    );
};

export default Contactos;
