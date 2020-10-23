import React, { } from "react";


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
        <div className="results">
            {/* retunerar meny för sökresultat */}
            <ul className="options_menu">
                <li>Customer ID</li>
                <li>Customer Name</li>
                <li>City</li>
                <li>Adress (ska bli ref)</li>
            </ul>
            {/* retunerar sökresultat */}
            <div className="options_results">
                {CustomersList}
            </div>
        </div>
    )
}

export default Customers;