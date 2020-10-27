import React, { } from "react";
import { useState } from "react";
import axios from 'axios';


// const API_URL = "http://192.168.0.241:8080/JSONTRIMService/json/customer";
const API_URL = "http://pluto.im.se:5280/JSONTRIMService/json/customer";

const SearchCustomers = ({ setCustomers }) => {
    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        let value = e.target.value;
        console.log("HandleChange: " + value)
        setSearch(value);
        if(value.length > 2){
            searchCustomers(API_URL + "/?q=" + search);
            
        }
        else{
            setCustomers([]);
            console.log(value + 'hejjejejejeejejejejejej test');
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("utsökt: " + search);
        searchCustomers(API_URL + "/?q=" + search); //?q=
    }

    const searchCustomers = async (next) => {
        console.log(next);
        try {
            const data = await axios.get(next);
            if (data != null) {
                console.log(data.data.customers);
                setCustomers(data.data.customers);
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
                <li>Customer #</li>
                <li>Customer Name</li>
                <li>City</li>
            </ul>
        </div>
    )
}

export default SearchCustomers;