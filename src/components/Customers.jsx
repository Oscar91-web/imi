import React, { } from "react";
import Details from "./Details";
import { useState } from "react";

const Customers = ({ customers }) => {
    const [details, setDetails] = useState([""]);
    let custsList = customers.map(function (c) {
        return <ul key={c.customer_number} onClick={() => setDetails(c)}>
                <li> {c.customer_number} </li>
                <li> {c.name}</li>
                <li> {c.city}</li>
                <li> {c.street}</li>
            </ul>
               
      
    });

    return (
        <div>
            <Details details={details}></Details>
            <div className="CustomerWrapper">
                <div className="Customermenu">
                    <div>Customer ID</div>
                    <div>Customer Name</div>
                    <div>City</div>
                    <div>Adress (ska bli ref)</div>
                </div>
                <div className="Customerbody">
                    {custsList}

                </div>
            </div>
            
             {/* customer komponent för details.  */}
        </div>
    )
}

export default Customers;