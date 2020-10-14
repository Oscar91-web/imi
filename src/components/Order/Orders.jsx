import React, { } from "react";
import './Orders.css';

const Orders = ({ orders, setDetails }) => {
    

    // const [customers, setCustomers] = useState([]); från app.js


    // retunerar sökresultat
    // console.log(orders)
    let custsList = orders.map(function (c) {
        
        return <ul key={c.order_number} onClick={() => setDetails(c)}>
                <li> {c.customer_number} </li>
                <li> {c.status}</li>
                <li> {c.amount}</li>
                <li> {c.salesman}</li>
            </ul>
    });

    return (
        <div className="searchOptions">
            
            {/* retunerar meny för sökresultat */}
            <div className="Customermenu">
                <div>Customer</div>
                <div>Status</div>
                <div>Amount</div>
                <div>Salesman</div>
            </div>
            {/* retunerar sökresultat */}
            <div className="searchResultsCustomer">
                    {custsList}
            </div>
            
            

            
                
        </div>
    )
}

export default Orders;