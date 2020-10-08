import React, { } from "react";

const Customers = ({ customers }) => {
    let custs = [
        { name: "Cust1", country: "Svedala1" },
        { name: "Cust2", country: "Svedala2" },
        { name: "Cust3", country: "Svedala3" },
    ];
    // let custsList = custs.map(function (c) {
    //     return <ul><li key="{c.name}" > {c.name}" </li><li> {c.country}</li></ul>
    // });
    let custsList = customers.map(function (c) {
        return <ul key={c.customer_number}><li> {c.customer_number} </li><li> {c.name}</li><li> {c.city}</li><li> {c.country}</li><li> {c.street}</li></ul>
    });
    return (
        <div>
            <div className="CustomerWrapper">
                <div className="Customermenu">
                    <div>Customer</div>
                    <div>Customer Name</div>
                    <div>City</div>
                    <div>Country</div>
                    <div>CustomerRef</div>
                </div>
                <div className="Customerbody">
                    {custsList}

                </div>
            </div>
        </div>
    )
}

export default Customers;