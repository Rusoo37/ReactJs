import Login from "./Login";
import { useEffect, useState } from "react";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
} from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig/firebaseConfig";

const providerF = new FacebookAuthProvider();

const providerG = new GoogleAuthProvider();

const LoginContainer = () => {
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

    const auth = getAuth();

    // Login with Google

    const callLoginGoogle = () => {
        console.log("Llegue");
        signInWithPopup(auth, providerG)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential =
                    GoogleAuthProvider.credentialFromError(error);
            });
    };

    //Login with Facebook

    const callLoginFacebook = () => {
        signInWithPopup(auth, providerF)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                const credential =
                    FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;

                // IdP data available using getAdditionalUserInfo(result)
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential =
                    FacebookAuthProvider.credentialFromError(error);
            });
    };

    //Demas

    const [showPassword, setShowPassword] = useState(false);

    const showPass = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <Login
                showPass={showPass}
                showPassword={showPassword}
                callLoginGoogle={callLoginGoogle}
                callLoginFacebook={callLoginFacebook}
                users={users}
            />
        </div>
    );
};

export default LoginContainer;
