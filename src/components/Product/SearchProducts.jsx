import React, { } from "react";
import { useState } from "react";
import axios from 'axios';


// const API_URL = "http://192.168.0.241:8080/JSONTRIMService/json/customer";
const API_URL = "http://pluto.im.se:5280/JSONTRIMService/json/product";

const SearchProducts = ({ setProducts }) => {
    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        console.log("HandleChange: " + search)
        setSearch(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("utsökt: " + search);
        searchProducts(API_URL + "/?q=" + search); //?q=
    }

    const searchProducts = async (next) => {
        console.log(next);
        try {
            const data = await axios.get(next);
            if (data != null) {
                console.log(data.data.products);
                setProducts(data.data.products);
            }
        } catch (err) {
            console.log(err)
            // setError(err.message);
        }
    }

    return (
        <div className="searchform">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Search..." value={search} onChange={handleChange} />
                    <input type="submit" value="Search" />
                </form>
                <ul className="options_menu">
                <li>Product #</li>
                <li>Description</li>
                <li>Unit</li>
                
            </ul>
        </div>
    )
}

export default SearchProducts;