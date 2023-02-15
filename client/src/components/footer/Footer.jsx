import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="fixed bottom-0 bg-[#2F2F2F] text-white w-full h-12 justify-center flex gap-10 -mx-4">
            <p className="mt-2.5">
                <Link to={"/"}>Home</Link>
            </p>
            <p className="mt-2.5">
                <Link to={"/explore"}>Explore</Link>
            </p>
            <p className="mt-2.5">Icon 3</p>
            <p className="mt-2.5">Icon 4</p>
        </footer>
    );
};

export default Footer;
