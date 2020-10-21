import React from 'react';
import { useState } from "react";
import SearchCustomers from './SearchCustomers';
import Customers from './Customers';
import Customer from './Customer';
import './CustomerPage.css';

function CustomerPage() {
  const [customers, setCustomers] = useState([]);
  const [customer, setCustomer] = useState(null);
  console.log(customer)
  return (
    <div className="gridareas">
      <div className="customer">
        <Customer customer={customer}></Customer>
      </div>
      <div className="search">
      <SearchCustomers setCustomers={setCustomers}></SearchCustomers>
      </div>
      <div className="results">
      <Customers customers={customers} setCustomer={setCustomer}></Customers>
      </div>
    </div>
  );
}

export default CustomerPage;
