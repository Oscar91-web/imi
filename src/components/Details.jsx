import React, { } from "react";

const Details = ({ details }) => {
    

    return (
        <div>
        <ul className = "abcdetails">




            <li> <label>Customer number</label><div>{details.customer_number} </div></li>
            <li> <label>Bill</label><div>{details.bill} </div></li>
            <li> <label>City</label><div>{details.city} </div></li>
            <li> <label>Country</label><div>{details.country} </div></li>
            <li> <label>Language</label><div>{details.language} </div></li>
            <li> <label>Name</label><div>{details.name} </div></li>
            <li> <label>Name2</label><div>{details.name2} </div></li>
            <li> <label>ref</label><div>{details.ref} </div></li>
            <li> <label>Salesman</label><div>{details.salesman} </div></li>
            <li> <label>Street</label><div>{details.street} </div></li>
            </ul>
            </div>
    )
}

export default Details;