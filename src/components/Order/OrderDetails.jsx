import React, { } from "react";
import './OrderDetails.css';

const OrderDetails = ({ details }) => {
    if(details != null){
        
    return (
        <div className = "resultCustomer">
        <ul>
            <li> <label>order number</label><div>{details.order_number} </div></li>
            <li> <label>customer</label><div>{details.customer_number} </div></li>
            <li> <label>status</label><div>{details.status} </div></li>
            <li> <label>amount</label><div>{details.amount} </div></li>
            <li> <label>salesman</label><div>{details.salesman} </div></li>
            <li> <label>ref</label><div>{details.ref} </div></li>
            <li> <label>date</label><div>{details.date} </div></li>
            
            </ul>
            </div>
                )}
                else return (<div className ="resultCustomer">
                    hej
                </div>);
}

export default OrderDetails;