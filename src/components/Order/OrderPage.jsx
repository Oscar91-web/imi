import React from 'react';
import { useState } from "react";
import SearchOrders from './SearchOrders';
import Orders from './Orders';
import Order from './Order';
import axios from 'axios';
const API_URL = "http://pluto.im.se:5280/JSONTRIMService/json/order";
function OrderPage(props) {
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState([]);

  const searchOrders = async (next) => {
    console.log(next);
    try {
      const data = await axios.get(next);

      if (data != null) {
        console.log(data.data.orders);
        // setOrders(data.data.orders);
      }
    } catch (err) {
      console.log(err)
      // setError(err.message);
    }
  }
  if (props.location.state) {
    console.log(props.location.state.customer);
    searchOrders(API_URL + '?customer_number=' + props.location.state.customer);
  }
  return (
    <div>
      <Order order={order}></Order>
      <SearchOrders setOrders={setOrders}></SearchOrders>
      <Orders orders={orders} setOrder={setOrder}></Orders>

    </div>
  );
}

export default OrderPage;



  // let test123;
  // console.log("här")
  // console.log(props);


