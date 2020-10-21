import React from 'react';
import { useState } from "react";
import OrderLines from './OrderLines';

import axios from 'axios';
import { useEffect } from 'react';

const API_URL = "http://pluto.im.se:5280/JSONTRIMService/json/orderline";

function OrderLinePage(props) {
  const [orderLines, setOrderLines] = useState([]);
  // const [order, setOrder] = useState(null);
  const [lastSearch, setLastSearch] = useState(null);

  const searchOrderLines = async (orderNo) => {
    console.log("searching for orders for customer number: " + orderNo);
    try {
      if (!lastSearch || lastSearch != orderNo) {
        const data = await axios.get(API_URL + "?order_number=" + orderNo);
        setLastSearch(orderNo);
        if (data != null) {
          console.log("in searchOrders with data: ");
          console.log(data.data);
          setOrderLines(data.data.orderlines);
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
    if (props.location.state && props.location.state.order) {
      searchOrderLines(props.location.state.order);
    }
  });

  return (
    <div>
      <h1>Orderline Page</h1>
     
      <OrderLines orderLines={orderLines} setOrderLines={setOrderLines}></OrderLines>
    </div>
  );
}

export default OrderLinePage;