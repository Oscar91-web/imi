import React, { } from "react";
import { useState } from "react";
import axios from 'axios';
import './SearchOrders.css';

// const API_URL = "http://192.168.0.241:8080/JSONTRIMService/json/customer";
const API_URL = "http://pluto.im.se:5280/JSONTRIMService/json/order";

const SearchOrders = ({ setOrders }) => {
    const [search, setSearch] = useState("");


    const handleChange = (e) => {
        console.log("HandleChange: " + search)
        setSearch(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("utsökt: " + search);
        searchOrders(API_URL + "?customer_number=" + search); //?q=


    }
    const searchOrders = async (next) => {
        console.log(next);
        try {
            const data = await axios.get(next);

            if (data != null) {
                console.log(data.data.orders);
                setOrders(data.data.orders);
            }
        } catch (err) {
            console.log(err)
            // setError(err.message);
        }
    }

    return (

        <div className="OrderSearchForm">
            <div>
                <form onSubmit={handleSubmit}>

                    <input className="searchInput" type="text" placeholder="Search..." value={search} onChange={handleChange} />
                    <input type="submit" value="Search" />
                </form>
            </div>
        </div>
    )
}

export default SearchOrders;