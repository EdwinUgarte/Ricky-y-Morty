import React from "react";
import { Link, NavLink } from "react-router-dom";

import './css/navbar.css'
const Navbar = () => {

    return (

        <header>
            <div className="navbar">
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