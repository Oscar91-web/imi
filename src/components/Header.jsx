import React, { } from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    // retunerar sökresultat
    return (
        <div className="header">
            <img className="logo" src="/imilogo.png" alt="imi" />
            <ul className="headerMenu">
                <Link to="/"><li>Products</li></Link>
                <Link to="/customers"><li>Customers</li></Link>
                <Link to="/orders"><li>Orders</li></Link>
            </ul>
        </div>
    )
}

export default Header;

