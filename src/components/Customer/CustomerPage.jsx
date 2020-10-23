import React from 'react';
import { useState } from "react";
import SearchCustomers from './SearchCustomers';
import Customers from './Customers';
import Customer from './Customer';


function CustomerPage() {
  const [customers, setCustomers] = useState([]);
  const [customer, setCustomer] = useState(null);
  console.log(customer)
  return (
    <div>
      <div className="gridArea">
        <Customer customer={customer}></Customer>
        <SearchCustomers setCustomers={setCustomers}></SearchCustomers>
        <Customers customers={customers} setCustomer={setCustomer}></Customers>
      </div>
    </div>
  );
}

export default CustomerPage;
