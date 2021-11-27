import React, { Component, useState, useEffect } from "react";
import "../../../App.css";
import {getCategory} from '../../../util/apis';
import ProductDisplayComp from '../../../components/product-display';

export default function WomenJeans() {
    

  const [ products, setProducts ] = useState([]);
  const [ productsLoaded, setProductsLoading ] = useState(false);


  async function fetcher() {

    var products;
    var cart;
    await fetch('/search/women/jeans')
    .then(res => res.json())
    .then(result => {
      products = result;
    });
    
    await fetch('/getCart/' + 'ammarsura@gmail.com' )
    .then(res => res.json())
    .then(result => {
    cart = result.cart;
    });

    for (let i = 0; i < cart.length; i++) {
      var c = cart[i];
      for (let j = 0; j < products.length; j++) {
        var p = products[j];
        if (p._id === c.product_id) {
          p.quantity = c.quantity;
        } else {
          p.quantity = 0;
        } 
      } 
    }
    setProducts(products);
    setProductsLoading(true);
  }


  

    useEffect(() => {
      if ( productsLoaded === false ) {
        fetcher();
      }
    });


    if (!productsLoaded) {
      return <div>Loading ... </div>;
    } else {
        return (
        
          <div style={{marginTop: "15%"}}> 
              <ProductDisplayComp lst = {products}/>
          </div>
            
        );
    }
}

 