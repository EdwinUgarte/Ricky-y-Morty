import React from "react";
import { Link, NavLink } from "react-router-dom";

import './css/navbar.css'
const Navbar = () => {

    return (

        <nav >
            <div className="navbar">
                <div>
                    <a href="/">
                        <img src="/images/Rick_and_Morty.svg.png" alt="" />
                    </a>

                </div>
            </div>

        </nav>

    );

}

export default Navbar;