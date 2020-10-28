import React, { } from "react";
import './Order.css';

const Orders = ({ orders, setOrder }) => {
    // retunerar sökresultat
    console.log(orders)
    let orderList = orders.map(function (o) {
        return <ul key={o.order_number} onClick={() => setOrder(o)}>
            <li> {o.customer_number} </li>
            <li> {o.status}</li>
            <li> {o.amount}</li>
            <li> {o.salesman}</li>
        </ul>
    });

    return (
        <div className="results">
            {/* retunerar meny för sökresultat */}
            
            {/* retunerar sökresultat */}
            <div className="options_results orderGrid">
                {orderList}
            </div>
        </div>
    )
}

export default Orders;