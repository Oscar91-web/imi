import React, { } from "react";


const Customers = ({ customers, setCustomer }) => {
    
    console.log(customers)
    let CustomersList = customers.map(function (c) {
        return <ul key={c.customer_number} onClick={() => setCustomer(c)}>
            <li> {c.customer_number} </li>
            <li> {c.name}</li>
            <li> {c.city}</li>
        </ul>
    });

    return (
        <div className="results">
            {/* retunerar meny för sökresultat */}
           
            {/* retunerar sökresultat */}
            <div className="options_results">
                {CustomersList}
            </div>
        </div>
    )
}

export default Customers;