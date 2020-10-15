import React from 'react';

import OrderDefineSelection from './OrderDefineSelection';
import Orders from './Orders';
import OrderDetails from './OrderDetails';

import { useState } from "react";

function OrderPage(props) {
  const [customers, setCustomers] = useState([]);
  const [details, setDetails] = useState([]);
  // let receivedMessage = props.location.state.customer;
  // console.log("CUSTOMER HÄR " + receivedMessage);
  console.log("här")
  console.log(props);
  console.log(props.location.state);
  return (
    <div>
      
     <OrderDetails details={details}></OrderDetails>
     <OrderDefineSelection setCustomers={setCustomers}></OrderDefineSelection>
     <Orders orders={customers} setDetails={setDetails}></Orders> 

    </div>
  );
}

export default OrderPage;
