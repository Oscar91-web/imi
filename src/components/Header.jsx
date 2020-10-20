import React, { } from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    // retunerar sökresultat
    return (
        <div className="header">
            <img className="logo" src="/imilogo.png" alt="imi" />
            <div className="headerMenu">
                <Link to="/products"><div>Products</div></Link>
                <Link to="/customers"><div>Customers</div></Link>
                <Link to="/orders"><div>Orders</div></Link>
            </div>
        </div>
    )
}

export default Header;

