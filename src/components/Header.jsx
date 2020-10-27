import React, { } from "react";
import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
    // retunerar sökresultat
    return (
        <div className="header">
            <img className="logo" src="/imilogo.png" alt="imi" />
            <div className="headerMenu">
                <NavLink to="/products" activeClassName="activeLink"><div className="options">Products</div></NavLink>
                <NavLink to="/customers" activeClassName="activeLink"><div className="options">Customers</div></NavLink>
                <NavLink to="/orders" activeClassName="activeLink">  <div className="options"> Orders</div></NavLink>
            
            </div>
        </div>
    )
}

export default Header;

