import React from 'react';

import OrderDefineSelection from './OrderDefineSelection';
import Orders from './Orders';
import OrderDetails from './OrderDetails';

import { useState } from "react";

function OrderPage() {
  const [customers, setCustomers] = useState([]);
  const [details, setDetails] = useState([]);
  console.log(details)
  return (
    <div>
      
     <OrderDetails details={details}></OrderDetails>
     <OrderDefineSelection setCustomers={setCustomers}></OrderDefineSelection>
     <Orders orders={customers} setDetails={setDetails}></Orders> 

    </div>
  );
}

export default OrderPage;
