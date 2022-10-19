import React from "react";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    return (

      <header class="p-3 text-bg-dark"><div class="container"><div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"><a routerlink="/home" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none" href="/home">
       </a><ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"><li><a routerlinkactive="router-link-active" class="nav-link px-2 text-secondary" href="/home">Home</a></li><li><a routerlinkactive="router-link-active" class="nav-link px-2 text-white router-link-active" href="/proyectos">Proyectos</a></li><li><a routerlinkactive="router-link-active" class="nav-link px-2 text-white" href="/empleados">Empleados</a></li><li><a routerlinkactive="router-link-active" class="nav-link px-2 text-white" href="/nosotros">Nosotros</a></li></ul><div class="text-end"></div></div></div></header>
    );

}

export default Navbar;