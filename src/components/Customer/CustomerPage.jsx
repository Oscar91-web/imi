import React from 'react';
import DefineSelection from './DefineSelection';
import Customers from './Customers';
import Details from './Details';

import { useState } from "react";

function CustomerPage() {
  const [customers, setCustomers] = useState([]);
  const [details, setDetails] = useState([]);
  console.log(details)
  return (
    <div>
      
      {/* customers */}
      
     <Details details={details}></Details>
     <DefineSelection setCustomers={setCustomers}></DefineSelection>
     <Customers customers={customers} setDetails={setDetails}></Customers> 
     {/* <OrderDetails details={details}></OrderDetails>
     <OrderDefineSelection setCustomers={setCustomers}></OrderDefineSelection>
     <Orders orders={customers} setDetails={setDetails}></Orders>  */}

    </div>
  );
}

export default CustomerPage;
