import React from "react";
import { Outlet, Link } from "react-router-dom";

function NavBar() {
    return (
        <ul className="ul">
            <li className="li"><Link to="Home">Home</Link></li>
            <li className="li"><Link to="Parcels">Parcels</Link></li>
        </ul>
    )
}

export default NavBar;