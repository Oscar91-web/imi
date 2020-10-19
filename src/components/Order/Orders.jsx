import React, { } from "react";
import './Orders.css';

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
        <div className="searchOptions">
            {/* retunerar meny för sökresultat */}
            <div className="Ordermenu">
                <div>Customer</div>
                <div>Status</div>
                <div>Amount</div>
                <div>Salesman</div>
            </div>
            {/* retunerar sökresultat */}
            <div className="searchResultsOrders">
                {orderList}
            </div>
        </div>
    )
}

export default Orders;