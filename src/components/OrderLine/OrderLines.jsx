import React, { } from "react";
// import './Orders.css';

const OrderLines = ({ orderLines, setOrderLines }) => {
    // retunerar sökresultat
    
    let orderList = orderLines.map(function (o) {
        return <ul key={o.order_number}>
            <li> {o.order_number} </li>
            <li> {o.rowpos}</li>
            <li> {o.rowsubpos}</li>
            <li> {o.rowseq}</li>
            <li> {o.product_id}</li>
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

export default OrderLines;

// "order_number": 101396,
// "rowpos": 10,
// "rowsubpos": 0,
// "rowseq": 0,
// "shipdate": "1998-06-22T00:00:00.000Z",
// "codate": "1998-06-22T00:00:00.000Z",
// "credate": "1998-06-22T00:00:00.000Z",
// "product_id": "420011"