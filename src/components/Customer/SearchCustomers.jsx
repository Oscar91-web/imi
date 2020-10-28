import React, { } from "react";
import { useState } from "react";
import axios from 'axios';
import buildURL from "../Utils";



const SORTORDER = ["customer_number","name", "city"];

const SearchCustomers = ({ setCustomers }) => {
    const [search, setSearch] = useState("");
    const [ascending, setAscending] = useState(true);
    const [columnName, setColumnName] = useState(null);
    
    const handleChange = (e) => {
        let value = e.target.value;
        console.log("HandleChange: " + value)
        setSearch(value);
        if(value.length > 2){
            searchCustomers(buildURL("customer", {q: value}));
            
        }
        else{
            setCustomers([]);
            console.log(value + 'hejjejejejeejejejejejej test');
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("utsökt: " + search);
        searchCustomers(buildURL("customer", {q: search}));
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
    const testclick = (sortorder) => {

        // searchCustomers(API_URL + "?order-by=customer_number&q=" + search);
        // searchCustomers(API_URL + "?order-by=" + sortorder +"&q=" + search);
        setAscending(!ascending);
        setColumnName(sortorder);
        
        if(!ascending){
            setColumnName(columnName + "-");
        }
        console.log("sortorder = " + sortorder + "SORTORDERRRRRRRRRRRRRR = " + SORTORDER[1])
        console.log("clicked");
        console.log("sortClicked: " + ascending + " | columnName: " + columnName);
        searchCustomers(buildURL("customer", {q:search, 'order-by': columnName} ))
        
    }
    return (
        <div className="searchform">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Search..." value={search} onChange={handleChange} />
                    <input type="submit" value="Search" />
                </form>
                <ul className="options_menu">
                <li onClick={() => testclick(SORTORDER[0])}>Customer #</li>
                <li onClick={() =>testclick(SORTORDER[1])}>Customer Name</li>
                <li onClick={() =>testclick(SORTORDER[2])}>City</li>
            </ul>
        </div>
    )
}

export default SearchCustomers;