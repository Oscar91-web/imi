import React, { } from "react";
import { useState } from "react";
import axios from 'axios';
import './Order.css';

// const API_URL = "http://192.168.0.241:8080/JSONTRIMService/json/customer";
const API_URL = "http://pluto.im.se:5280/JSONTRIMService/json/order";

const SearchOrders = ({ setOrders }) => {
    const [orderNo, setOrderNo] = useState("");
    const [customerNo, setCustomerNo] = useState("");
    const [status, setStatus] = useState("");

    const handleOrder = (e) => {
        console.log("HandleChange: " + orderNo)
        setOrderNo(e.target.value);
    }
    const handleCustomer = (e) => {
        console.log("HandleChange: " + customerNo)
        setCustomerNo(e.target.value);
    }
    const handleStatus = (e) => {
        console.log("HandleChange: " + status)
        setStatus(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("utsökt: ");
        
        let fields =[["order_number", orderNo],["customer_number", customerNo],["status", status]];
        let x = fields.filter(v => v[1]).map(v => v.join('=')).join('&');
        console.log(x);
        searchOrders(API_URL + '?' + x); //?q=
    }
    const searchOrders = async (next) => {
        console.log(next);
        try {
            const data = await axios.get(next);

            if (data != null) {
                console.log(data.data.orders);
                setOrders(data.data.orders);
            }
        } catch (err) {
            console.log(err)
            // setError(err.message);
        }
    }

    return (

        <div className="searchform">
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                    <label className="smallerTopics">Order #</label><input className="searchInput" type="text" placeholder="Order..." value={orderNo} onChange={handleOrder} />
                    <label className="smallerTopics">Customer</label><input className="searchInput" type="text" placeholder="Customer..." value={customerNo} onChange={handleCustomer} />
                    {/* testa olika handlechange */}
                    <label className="smallerTopics">Status</label><input className="searchInput" type="text" placeholder="Status..." value={status} onChange={handleStatus} /> 
                    <input className="test111" type="submit" value="Search" />
                    </div>
                </form>
                <div className="options_menu">
                <div>Customer #</div>
                <div>Status</div>
                <div>Amount</div>
                <div>Salesman</div>
            </div>
            </div>
        </div>
    )
}

export default SearchOrders;