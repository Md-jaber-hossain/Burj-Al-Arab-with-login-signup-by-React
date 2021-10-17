import React from 'react';
import useAuth from '../../hooks/useAuth';
import "../Login/Login.css";

const Register = () => {
    const { user, loggedInUser, email, password, error, signInUsingGoogle,
        signInUsingGithub, handleEmailChange, handlePasswordChange, handleOnSubmit } = useAuth();
    return (
        <div className="App container ">
            <div className="row">
                <div className="login-area col-md-6">
                    <div>
                        <div className="login-box d-flex align-items-center justify-content-center">
                            <div className="login">
                                <div className="login-box">
                                    <h2 className="text-info">Pease Register</h2>
                                    <form onSubmit={handleOnSubmit}>
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
                                            value="Register"
                                        />
                                    </form>
                                </div>
                                <button className="me-2 btn btn-danger text-white" onClick={signInUsingGoogle}>
                                    Signup with Google
                                </button>
                                <button className="me-2 btn btn-primary text-white" onClick={signInUsingGithub}>
                                    Signup with Github
                                </button>
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

export default Register;