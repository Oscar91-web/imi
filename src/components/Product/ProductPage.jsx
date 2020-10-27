import React from 'react';
import { useState } from "react";
import SearchProducts from './SearchProducts';
import Products from './Products';
import Product from './Product';
import axios from 'axios';
import { useEffect } from 'react';
const API_URL = "http://pluto.im.se:5280/JSONTRIMService/json/product";

function ProductPage(props) {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  console.log(product)
  const [lastSearch, setLastSearch] = useState(null);

  const searchOrderLines = async (productId) => {
    console.log("searching for orders for customer number: " + productId);
    try {
      if (!lastSearch || lastSearch !== productId) {
        console.log("sörgeing får +´" + productId)
        const data = await axios.get(API_URL + "?product_id=" + productId);
        setLastSearch(productId);
        if (data !== null) {
          console.log("in searchOrders with data: ");
          console.log(data.data);
          setProducts(data.data.products);
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
    if (props.location.state && props.location.state.product) {
      searchOrderLines(props.location.state.product);
    }
  });
  return (
    <div>
      <div className="gridArea stickyWrapper">
        <Product product={product}></Product>
        <SearchProducts setProducts={setProducts}></SearchProducts>
        
      </div>
      <Products products={products} setProduct={setProduct}></Products>
    </div>
  );
}

export default ProductPage;
