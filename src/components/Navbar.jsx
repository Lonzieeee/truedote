import React, { useState } from "react";
import './Navbar.css';
import logo from "../assets/logo.svg";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toogleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* logo */}
                <div className="logo">
                    <img src={logo}alt="Truedote Logo" />
                </div>
                {/* navlinks */}
                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>

                    <li><a href="#">Home</a></li>

                    <li><a href="#">Products</a></li>
                   
                    <li><a href="#">Research</a></li>
                    <li><a href="#">Invest</a></li>
                    <li><a href="#">Blog</a></li>
                    </ul>
                    {/* login and sigh in */}
                    <div className="auth-buttons">
                        <span className="login">Login</span>
                        <button className="sign-up-btn">Sign In</button>
                    </div>
                    {/* hamburger */}
                    <div className="hamburger" onClick={toogleMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
            </div>
        </nav>
    );
}
export default Navbar;