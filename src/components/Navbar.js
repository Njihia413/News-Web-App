import React from "react";
import { NavLink } from "react-router-dom";

function Navbar () {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container container-fluid">
                <a className="navbar-brand" href="/">HotNewsAPI</a>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarSupportedContent"  aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>      
                </button>
                
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                    <ul className="navbar-nav nav-right">
                        <li className="nav-item">
                            <NavLink to="/technology"  className="nav-link">technology</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/health"  className="nav-link">health</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/science"  className="nav-link">science</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/business"  className="nav-link">business</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/sports"  className="nav-link">sports</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/entertainment"  className="nav-link">entertainment</NavLink>
                        </li>
                    </ul>
                 </div>
            </div>
        </nav>
    )
}

export default Navbar;