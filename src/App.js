import React, {  } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CustomerPage from './components/Customer/CustomerPage';
import OrderPage from './components/Order/OrderPage';
import ProductPage from './components/Product/ProductPage';
import OrderLinePage from './components/OrderLine/OrderLinePage';
import Chart1 from './components/TestCharts/Chart1';
import Chart2 from './components/Chart2';



function App() {

  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route path='/Products' component={ProductPage} />
        <Route path='/customers' component={CustomerPage} />
        <Route path='/orders' component={OrderPage} />
        <Route path='/orderlines' component={OrderLinePage} />
        <Route path='/chart1' component={Chart1} />
        <Route path='/chart2' component={Chart2} />
      </Switch>
    </div>
  );
}

export default App;
