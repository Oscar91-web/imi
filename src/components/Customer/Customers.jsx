import React, { } from "react";
import './Customers.css';

const Customers = ({ customers, setDetails }) => {
    

    // const [customers, setCustomers] = useState([]); från app.js


    // retunerar sökresultat
    console.log(customers)
    let custsList = customers.map(function (c) {
        
        return <ul key={c.customer_number} onClick={() => setDetails(c)}>
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
                    {custsList}
            </div>
            {/* <DefineSelection setCustomers={setCustomers}></DefineSelection> från app.js  */}
            

            
                
        </div>
    )
}

export default Customers;