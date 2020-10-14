import React, { } from "react";
import { useState } from "react";
import axios from 'axios';
import './DefineSelection.css';

// const API_URL = "http://192.168.0.241:8080/JSONTRIMService/json/customer";
const API_URL = "http://pluto.im.se:5280/JSONTRIMService/json/customer";

const DefineSelection = ({ setCustomers }) => {
    const [search, setSearch] = useState("");


    const handleChange = (e) => {
        console.log("HandleChange: " + search)
        setSearch(e.target.value);
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

        <div className="CustomerSearchForm">
            <div>
            <form className="stretchffs" onSubmit={handleSubmit}>

                <input className="searchInput" type="text" placeholder="Search..." value={search} onChange={handleChange} />
                <input type="submit" value="Search" />
            </form>
            </div>
        </div>
    )
}

export default DefineSelection;