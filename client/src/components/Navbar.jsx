import React from "react";
import { Link } from "react-router";

const Navbar = () => {
    return (
        <nav className="navbar shadow-2xl">
            <Link to="/">
                <p className="text-2xl font-bold text-gradient">RESUMIND</p>
            </Link>
            <Link to="/upload" className="primary-button  w-fit">
                <span className="text-white">Upload Resume</span>
            </Link>
        </nav>
    );
};

export default Navbar;
