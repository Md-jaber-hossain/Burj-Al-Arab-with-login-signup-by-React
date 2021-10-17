import { useEffect, useState } from "react"
import initializeAuthentication from '../Firebase/firebase.initialize';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signInWithEmailAndPassword, sendPasswordResetEmail,createUserWithEmailAndPassword, sendEmailVerification, onAuthStateChanged, signOut } from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loggedInUser, setLoggedInUser] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // google sign in
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
            // .then(result => {
            //     console.log(result.user);
            //     setUser(result.user);
            // })
            // .catch(error => {
            //     setError(error.message);
            // })
    }

    // github signin
    const signInUsingGithub = () => {
        return signInWithPopup(auth, githubProvider);
            // .then(result => {
            //     setUser(result.user);
            // })
    }
    // logout
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }
    // signin hold
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, []);

    // Login by email and password
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        if (e.target.value.length < 6) {
            console.error("password must need to be at leaset 6 characters");
            return;
        } else {
            setPassword(e.target.value);
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const { email, name, PhotoURL } = result.user;
                const userInfo = {
                    name: name,
                    email: email,
                    photo: PhotoURL,
                };
                setLoggedInUser(userInfo);
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            });
    };
    const hanleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => { })
            .catch((err) => {
                console.log(err.message);
            });
    };

    // registration by email and password
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
          .then((result) => {
            console.log(result.user);
            verifyEmail();
          })
          .catch((error) => console.log(error.message));
      };
    
      const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
        .then(() => {
          // Email verification sent!
        });
      };

    return {
        user,
        error,
        loggedInUser,
        email,
        password,

        signInUsingGoogle,
        signInUsingGithub,
        logout,

        handleEmailChange,
        handlePasswordChange,
        handleLogin,
        hanleResetPassword,

        handleOnSubmit
    }
}

export default useFirebase;