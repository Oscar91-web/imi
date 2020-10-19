import React, { } from "react";
import './Customers.css';

const Customers = ({ customers, setCustomer }) => {
    
    console.log(customers)
    let CustomersList = customers.map(function (c) {
        return <ul key={c.customer_number} onClick={() => setCustomer(c)}>
            <li> {c.customer_number} </li>
            <li> {c.name}</li>
            <li> {c.city}</li>
            <li> {c.street}</li>
        </ul>
    });

    return (
        <div className="searchOptions">
            {/* retunerar meny för sökresultat */}
            <div className="Customermenu">
                <div>Customer ID</div>
                <div>Customer Name</div>
                <div>City</div>
                <div>Adress (ska bli ref)</div>
            </div>
            {/* retunerar sökresultat */}
            <div className="searchResultsCustomer">
                {CustomersList}
            </div>
        </div>
    )
}

export default Customers;