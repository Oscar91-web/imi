import React, {} from "react";
import { useState } from "react";
import { Customers } from './Customers';
import { axios } from 'axios';

const API_URL = "http://pluto.im.se:5280/JSONTRIMService/json/customer";

const DefineSelection = () => {
    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        console.log("HandleChange: " + search)
        setSearch(e.target.value);
    }
    const handleSubmit = (e) => {
        console.log("utsökt: " + search);
        searchCustomers(API_URL + "/?q=" + search);
        e.preventDefault();

    }
    const searchCustomers = async (next) => {
        let allResults = [];
        console.log(next);
        try {
            
                const data = await axios.get(next);

                if (data != null) {
                    console.log(data);
                    
                  
                }
                
            
            
        } catch (err) {
            console.log(err)
            // setError(err.message);
        }
    }

    return (
        
        <div>
            <div className="DefineSelectionMenu">
                <div>Define selection</div>
                <div>Advanced</div>
            </div>
            <div className="DefineSelectionBody">
            <form onSubmit={handleSubmit}>

                <input className="searchInput" type="text" placeholder="Search character" value={search} onChange={handleChange} />
                <input type="submit" value="Submit" />
            </form>
            </div>
       </div>
    )
}

export default DefineSelection;