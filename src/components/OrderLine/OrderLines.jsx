import React, { } from "react";
import { Link } from "react-router-dom";
import './OrderLines.css';

const OrderLines = ({ orderLines, setOrderLines }) => {
    // retunerar sökresultat

    let orderList = orderLines.map(function (o) {
        let orderkey = o.rowpos +"-"+ o.rowseq;


        return <div key= {orderkey}>
            
            <div>
                <ul  className="orderlinesDetails" >
                <li> {o.rowpos}</li>
                <li> {o.rowseq}</li>
                <li> {o.codate}</li>
                <li> {o.shipdate}</li>
                    <li>  <Link to={{
                pathname: '/products/',
                state: { product: o.product_id }
            }}><div className="see123 color123">{o.product_id}</div></Link></li>
                </ul>
            
            </div>



        </div>


    });

    return (
        <div className="results">
            {/* retunerar meny för sökresultat */}
            <ul className="options_menu orderLinesGrid">
                <li>Pos</li>
                <li>Seq</li>
                <li>Order Date</li>
                <li>Ship Date</li>
                <li>Customer #</li>
            </ul>
            {/* retunerar sökresultat */}
            <div className="options_results orderLinesGrid">
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