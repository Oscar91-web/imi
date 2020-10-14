import React, { Component } from 'react';
import Header from './components/Header';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import CustomerPage from './components/Customer/CustomerPage';
import OrderPage from './components/Order/OrderPage';


function App() {

  return (
    
    <div className="App">
      
      <Header></Header>
      <Switch>
      <Route path='/customers' component={CustomerPage} />
      <Route path='/orders' component={OrderPage} />
      </Switch>
      {/* customers */}
      
     {/*<Details details={details}></Details>
     <DefineSelection setCustomers={setCustomers}></DefineSelection>
     <Customers customers={customers} setDetails={setDetails}></Customers>  */}
     {/* <OrderDetails details={details}></OrderDetails>
     <OrderDefineSelection setCustomers={setCustomers}></OrderDefineSelection>
     <Orders orders={customers} setDetails={setDetails}></Orders>  */}

     {/* <CustomerPage></CustomerPage>
     <OrderPage></OrderPage> */}

    </div>
  );
}

export default App;
