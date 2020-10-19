import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
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
    </div>
  );
}

export default App;
