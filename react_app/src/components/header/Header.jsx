import React from "react";
import { NavLink } from "react-router";
import "./Header.css";
import LangSwitcher from "./LangSwitcher";

const Header = () => {
    return (
        <header>
            <nav className="main-menu">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/shopping">Shopping</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
            <LangSwitcher />
        </header>
    );
};

export default Header;
