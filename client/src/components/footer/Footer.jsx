import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 right-0 flex h-12 w-full justify-center gap-10 bg-[#2F2F2F] text-white">
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
