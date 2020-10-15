import React, { } from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    // retunerar sökresultat
    return (
        <div className="header">
            <img className="logo" src="/imilogo.png" alt="imi" />
            <ul className="headerMenu">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/customers">Customers</Link></li>
                <li><Link to="/orders">Orders</Link></li>
            </ul>
        </div>
    )
}

export default Header;

