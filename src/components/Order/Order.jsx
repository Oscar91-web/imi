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
                    <li><label className="smallerTopics">Order #</label><div>{order.order_number} </div></li>
                    <li > <label className="smallerTopics">Customer #</label><div>{order.customer_number} </div></li>
                    <li> <label className="smallerTopics">Status</label><div>{order.status} </div></li>
                    <li> <label >Amount</label><div>{order.amount} </div></li>
                    <li> <label>Aalesman</label><div>{order.salesman} </div></li>
                    <li> <label>Ref</label><div>{order.ref} </div></li>
                    <li> <label>Date</label><div>{order.date} </div></li>
                    <div> <Link to={{
                        pathname: '/orderlines',
                        state: { order: order.order_number }

                    }}><div className="see123">See order lines</div></Link></div>
                </ul>
            </div>
        )
    }
    else return (<div className="details">
        
    </div>);
}

export default Order;