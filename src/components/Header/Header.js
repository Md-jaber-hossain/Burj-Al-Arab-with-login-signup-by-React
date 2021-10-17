import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import header from '../../images/header.png';
import logo from '../../images/icons/logo.png';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {logout, user, loggedInUser} = useAuth();
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
            <nav className="nav">
                <ul>
                    <li>
                        <img className="logo" src={logo} alt=""/>
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link className="btn-book" to="/book">Book</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Registration</Link>
                    </li>
                    <li style={{color:"white", fontWeight:"bold"}}>
                        {user.displayName}
                    </li>
                    <li style={{color:"white", fontWeight:"bold"}}>
                        {loggedInUser.email}
                    </li>
                    <li>
                        {user.email && <button style={{borderRadius:"10px", border:"none"}} onClick={logout}>Logout</button>}
                    </li>
                </ul>
            </nav>
            <div className="title-container">
                <h1>Burj Al Arab</h1>
                <h2>A global icon of Arabian luxury</h2>
            </div>
        </div>
    );
};

export default Header;