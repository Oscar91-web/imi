import React, { } from "react";
import { useState } from "react";
import axios from 'axios';
import buildURL from "../Utils";

const SearchCustomers = ({ setCustomers }) => {
    const [search, setSearch] = useState("");
    const [ascending, setAscending] = useState(true);

    const handleChange = (e) => {
        let value = e.target.value;
        setSearch(value);
        if (value.length > 2){
            searchCustomers(buildURL("customer", {q: value, "order-by": "name"}));
        }
        else {
            setCustomers([]);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        searchCustomers(buildURL("customer", {q: search, "order-by": "customer_number"}));
    }
   
    const searchCustomers = async (url) => {
        console.log("url: " + url);
        try {
            const data = await axios.get(url);
            if (data != null) {
                console.log(data.data.customers);
                setCustomers(data.data.customers);
            }
        } catch (err) {
            console.log(err)
            // setError(err.message);
        }
        
    }

    const ascDesc = (s) => {
        return s + ((!ascending) ? "" : "-");
    }

    const sortClick = (col) => {
        setAscending(!ascending);
        console.log("col = " + col);
        console.log("sortClicked: " + ascending + " | columnName: " + col);
        searchCustomers(buildURL("customer", {"q": search, 'order-by': ascDesc(col) } ));
    }

    return (
        <div className="searchform">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Search..." value={search} onChange={handleChange} />
                    <input type="submit" value="Search" />
                </form>
                <ul className="options_menu">
                <li onClick={() => sortClick("customer_number")}>Customer #</li>
                <li onClick={() => sortClick("name")}>Customer Name</li>
                <li onClick={() => sortClick("city")}>City</li>
            </ul>
        </div>
    )
}

export default SearchCustomers;
