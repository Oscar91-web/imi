import React from 'react';
import DefineSelection from './components/DefineSelection';
import Customers from './components/Customers';
import './App.css';
import { useState } from "react";

function App() {
  const [customers, setCustomers] = useState([]);
  return (
    <div className="App">
      <header className="header">
        <img className="logo" src="/imilogo.png" alt="imi"/>
        <div className="headermenu">
          <div>Products</div>
          <div>Customers</div>
          <div>Orders</div>
        </div>
        <div className="login">Login</div>
      </header>
     <DefineSelection setCustomers={setCustomers}></DefineSelection>
     <Customers customers={customers}></Customers>
     
    </div>
  );
}

export default App;
