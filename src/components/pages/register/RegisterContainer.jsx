import {
    addDoc,
    collection,
    getDocs,
    serverTimestamp,
} from "firebase/firestore";
import Register from "./Register";

import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig/firebaseConfig";

const RegisterContainer = () => {
    const [userId, setUserId] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        let usersCollection = collection(db, "users");

        getDocs(usersCollection).then((res) => {
            let newArr = res.docs.map((user) => {
                return { ...user.data(), id: user.id };
            });
            setUsers(newArr);
        });
    }, []);

    const showPass = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div>
            <Register
                showPass={showPass}
                showPassword={showPassword}
                users={users}
                setUserId={setUserId}
            />
        </div>
    );
};

export default RegisterContainer;
