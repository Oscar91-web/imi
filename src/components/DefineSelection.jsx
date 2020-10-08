import React, {} from "react";
import { useState } from "react";
import { Customers } from './Customers';
import axios from 'axios';

// const API_URL = "http://192.168.0.241:8080/JSONTRIMService/json/customer";
const API_URL = "http://pluto.im.se:5280/JSONTRIMService/json/customer";

const DefineSelection = ({setCustomers}) => {
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
      
    // const searchCustomers = (url) => {
    //   console.log(axios);
    //     axios.get(url)
    //       .then(res => {
    //         console.log(url + "hej" + res); 
            
    //       })
    //       .else(err => {
    //         console.log("err:" + err)
    //       })
    //   }
      
      
    const searchCustomers = async (next) => {
        let allResults = [];
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

            {/* { this.state.persons.map(person => <li>{person.name}</li>)} */}
       </div>
    )
}

export default DefineSelection;