import React, { } from "react";
import './Order.css';

const Order = ({ order }) => {
    console.log("här är jag " + order);
    console.log(typeof(order));
  
    if (order) {
        

        return (
            <div className="resultOrders">
                <ul>
                    <li> <label>order number</label><div>{order.order_number} </div></li>
                    <li> <label>customer</label><div>{order.customer_number} </div></li>
                    <li> <label>status</label><div>{order.status} </div></li>
                    <li> <label>amount</label><div>{order.amount} </div></li>
                    <li> <label>salesman</label><div>{order.salesman} </div></li>
                    <li> <label>ref</label><div>{order.ref} </div></li>
                    <li> <label>date</label><div>{order.date} </div></li>

                </ul>
            </div>
        )
    }
    else return (<div className="resultOrders">
        
    </div>);
}

export default Order;