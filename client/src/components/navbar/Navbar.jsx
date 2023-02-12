import React from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
    return (
        <>
            <header className="w-full z-20 h-12 -mx-4 flex justify-around items-center fixed bg-[#FBF8F2]">
                <img className="h-8" src={logo} alt="logo de compañia" />
                <div className="flex gap-4 items-center">
                    <span>Notis</span>
                    <span>Search</span>
                </div>
            </header>
        </>
    );
};

export default Navbar;
