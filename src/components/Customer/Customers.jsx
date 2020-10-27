import React, { } from "react";


const Customers = ({ customer, customers, setCustomer }) => {
    
    
    console.log(customers)
    let customersList = customers.map(function (c) {
        let defaultClass= "UnactivatedSheilds";
        if(customer && customer===c){
            defaultClass = "ActivateShields"
        }
        
        return <ul className={defaultClass} key={c.customer_number} onClick={() => setCustomer(c)}>
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
                {customersList}
            </div>
        </div>
    )
}

export default Customers;