import React, { } from "react";
import { Link } from "react-router-dom";
import './Order.css';


const Order = ({ order }) => {
    console.log("här är jag " + order);
    console.log(typeof(order));
  
    if (order) {
        

        return (
            <div className="details">
                <ul>
                    <li className="detailsTop"><label>order number</label><div>{order.order_number} </div></li>
                    <li className="detailsTop"> <label>customer</label><div>{order.customer_number} </div></li>
                    <li className="detailsTop detailsRight"> <label>status</label><div>{order.status} </div></li>
                    <li> <label>amount</label><div>{order.amount} </div></li>
                    <li> <label>salesman</label><div>{order.salesman} </div></li>
                    <li> <label>ref</label><div>{order.ref} </div></li>
                    <li> <label>date</label><div>{order.date} </div></li>
                    <div> <Link to={{
                        pathname: '/orderlines',
                        state: { order: order.order_number }

                    }}><h1>See order lines</h1></Link></div>
                </ul>
            </div>
        )
    }
    else return (<div className="details">
        
    </div>);
}

export default Order;