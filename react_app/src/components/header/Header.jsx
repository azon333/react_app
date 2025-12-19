import React from "react";
import { NavLink } from "react-router";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <nav className="main-menu">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/shopping">Shopping</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
        </header>
    );
};

export default Header;
