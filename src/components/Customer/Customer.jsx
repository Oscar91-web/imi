import React, { } from "react";
import { Link } from "react-router-dom";
import './Customer.css';

const Customer = ({ customer }) => {
    if (customer != null) {
        return (
            <div className="resultCustomer">
                <ul>
                    <li> <label> <Link to={{
                            pathname: '/orders/',
                            state: { customer: customer.customer_number }

                        }}>Customer</Link> </label><div>{customer.customer_number}</div></li>
                    <li> <label>Bill</label><div>{customer.bill} </div></li>
                    <li> <label>City</label><div>{customer.city} </div></li>
                    <li> <label>Country</label><div>{customer.country} </div></li>
                    <li> <label>Language</label><div>{customer.language} </div></li>
                    <li> <label>Name</label><div>{customer.name} </div></li>
                    <li> <label>Name2</label><div>{customer.name2} </div></li>
                    <li> <label>ref</label><div>{customer.ref} </div></li>
                    <li> <label>Salesman</label><div>{customer.salesman} </div></li>
                    <li> <label>Street</label><div>{customer.street} </div></li>
                   
                </ul>

            </div>
        )
    }
    else return (<div className="resultCustomer">
        hej
    </div>);
}

export default Customer;