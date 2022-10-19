import React from "react";
import { Link, NavLink } from "react-router-dom";

import './css/navbar.css'
const Navbar = () => {

    return (

        <header className="navbar navbar-expand-lg bg-light">
            <div className="cont">
                <div>
                    <a href="/">
                        <img src="/images/Rick_and_Morty.svg.png" alt="" />
                    </a>

                </div>
            </div>

        </header>

    );

}

export default Navbar;