import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import "./Login.css";
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { user, loggedInUser, email, password, error, signInUsingGoogle, signInUsingGithub, handleEmailChange, handlePasswordChange, handleLogin, hanleResetPassword } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    // Redirect current page after login
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    const handleGithubLogin = () => {
        signInUsingGithub()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="container text-center ">
            <div className="row">
                <div className="login-area col-md-6">
                    <div>
                        {/* <h2>{loggedInUser.email}</h2> */}
                        <div className="login-box d-flex align-items-center justify-content-center">
                            <div className="login">
                                <div className="login-box">
                                    <h2 className="text-info">Pease Login</h2>
                                    <p className="text-danger">{error}</p>
                                    <form onSubmit={handleLogin}>
                                        <input
                                            onChange={handleEmailChange}
                                            className="input-felid"
                                            type="email"
                                            name="email"
                                            placeholder="Enter your Email"
                                        />
                                        <br />
                                        <input
                                            onChange={handlePasswordChange}
                                            className="input-felid"
                                            type="password"
                                            name="password"
                                            placeholder="Enter your Password"
                                        />
                                        <input
                                            className="mt-3 w-50 btn btn-success m-auto"
                                            type="submit"
                                            value="Login"
                                        />
                                    </form>
                                </div>
                                <button className="me-2 btn btn-danger text-white" onClick={handleGoogleLogin}>
                                    Login with Google
                                </button>
                                <button className="me-2 btn btn-primary text-white" onClick={handleGithubLogin}>
                                    Login with Github
                                </button>

                                <button className="mt-2 mb-3 btn btn-info text-white " onClick={hanleResetPassword}>
                                    Reset Password
                                </button>
                                <br />
                                <Link to="/register">New User?</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="img">
                        <img
                            className="image-fluid w-100"
                            src="https://i.ibb.co/wB5md78/undraw-Mobile-login-re-9ntv.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;