import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";

const User = () => {
    return (
        <div>
            <Link to="/login">
                <BiUser color={"white"} size={"30px"} />
            </Link>
        </div>
    );
};

export default User;
