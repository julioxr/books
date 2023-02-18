import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-20 flex h-12 w-full items-center justify-around bg-[#FBF8F2]">
                <Link to={"/"}>
                    <img className="h-8" src={logo} alt="logo de compañia" />
                </Link>
                <div className="flex items-center gap-4">
                    <span>Notis</span>
                    <span>Search</span>
                </div>
            </header>
        </>
    );
};

export default Navbar;
