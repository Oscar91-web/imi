import React, { } from "react";
import { Link } from "react-router-dom";


const Customer = ({ customer }) => {
    if (customer) {
        return (
            <div className ="details">
                <ul>
                    <li className="detailsTop"> {customer.customer_number}</li>
                    <li className="detailsTop"> <label>{customer.name}</label></li>
                    <li className="detailsTop detailsRight"> <label>{customer.country}</label></li>
                    <li> <label>Bill</label><div>{customer.bill} </div></li>
                    <li> <label>Salesman</label><div>{customer.salesman} </div></li>
                    <li className="detailsRight"> <label>City</label><div>{customer.city} </div></li>
                    <li> <label>Language</label><div>{customer.language} </div></li>
                    <li> <label>Reference</label><div>{customer.ref} </div></li>
                    <li className="detailsRight"> <label>Street</label><div>{customer.street} </div></li>

                <li> </li><li> </li>
                <li className="see123"> <Link to={{
                        pathname: '/orders/',
                        state: { customer: customer.customer_number }

                    }}><div className="see123"> See Orders </div></Link></li>
</ul>
            </div>
        )
    }
    else return (<div className ="details">
        <div className="detailsTop"> </div>
        
    </div>);
}

export default Customer;