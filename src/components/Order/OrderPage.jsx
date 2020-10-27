import React from 'react';
import { useState } from "react";
import SearchOrders from './SearchOrders';
import Orders from './Orders';
import Order from './Order';
import axios from 'axios';
import { useEffect } from 'react';


const API_URL = "http://pluto.im.se:5280/JSONTRIMService/json/order";

function OrderPage(props) {
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState(null);
  const [lastSearch, setLastSearch] = useState(null);

  const searchOrders = async (custNo) => {
    console.log("searching for orders for customer number: " + custNo);
    try {
      if (!lastSearch || lastSearch !== custNo) {
        const data = await axios.get(API_URL + "?customer_number=" + custNo);
        setLastSearch(custNo);
        if (data !== null) {
          console.log("in searchOrders with data: ");
          console.log(data.data.orders);
          setOrders(data.data.orders);
        }
      }
      else {
        console.log("already searched");
      }
    } catch (err) {
      console.log(err)
      // setError(err.message);
    }
  }

  useEffect(() => {
    if (props.location.state && props.location.state.customer) {
      searchOrders(props.location.state.customer);
    }
  });

  return (
    <div>
      <div className="gridArea stickyWrapper">

        <Order order={order}></Order>
        <SearchOrders setOrders={setOrders}></SearchOrders>
      </div>
      <Orders orders={orders} setOrder={setOrder}></Orders>

    </div>


  );
}

export default OrderPage;

