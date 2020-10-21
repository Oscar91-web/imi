import React, { } from "react";
import { Link } from "react-router-dom";
import './Customer.css';

const Customer = ({ customer }) => {
    if (customer) {
        return (
            <div className="resultCustomer">
                
                <ul>
                    <li><h1>{customer.customer_number}</h1> </li>
                    <li> <label><h1>{customer.name} </h1></label></li>
                    <li> <label><h1>{customer.country}</h1></label></li>

                    <li> <label>Bill</label><div>{customer.bill} </div></li>
                    <li> <label>Salesman</label><div>{customer.salesman} </div></li>
                    <li> <label>City</label><div>{customer.city} </div></li>
                    <li> <label>Language</label><div>{customer.language} </div></li>
                    <li> <label>Reference</label><div>{customer.ref} </div></li>
                    <li> <label>Street</label><div>{customer.street} </div></li>

                </ul>
                <div> <Link to={{
                        pathname: '/orders/',
                        state: { customer: customer.customer_number }

                    }}><h1>See order lines</h1></Link></div>

            </div>
        )
    }
    else return (<div className="resultCustomer">
        
    </div>);
}

export default Customer;