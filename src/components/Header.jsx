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
                <NavLink to="/chart1" activeClassName="activeLink">  <div className="options"> Chart1</div></NavLink>
                <NavLink to="/chart2" activeClassName="activeLink">  <div className="options"> Chart2</div></NavLink>
            </div>
        </div>
    )
}

export default Header;

