import React, { Component, useState, useEffect, useContext } from "react";
import "../App.css";
import ProductDisplayComp from "../components/product-display";
import { FilterProvider } from "../contexts/filter-context";
import FilterBar from '../components/filter-bar';
import { SearchContext } from '../contexts/search-context';




// console.log(query);

export default function Results() {
  
  const [products, setProducts] = useState([]);
  const [isLoaded, setProductsLoading] = useState(false);

  const query = window.location.href.slice(30);
  console.log('j', query);

  async function fetcher(query) {

    var products;
    var cart;
    var wishlist;
    await fetch('/search/byterm/' + query)
    .then(res => res.json())
    .then(result => {
      products = result;
      console.log(query, products)
    });
    
    await fetch('/getCart/' + 'ammarsura@gmail.com' )
    .then(res => res.json())
    .then(result => {
    cart = result.cart;
    });

    await fetch('/getWishlist/' + 'ammarsura@gmail.com' )
    .then(res => res.json())
    .then(result => {
    wishlist = result.wishlist;
    });

    
    for (let i = 0; i < products.length; i++) {
      products[i].quantity = 0;
      
    }

    if (cart.length > 0) {
      for (let i = 0; i < products.length; i++) {
        for (let j = 0; j < cart.length; j++) {
          if(cart[j].product_id === products[i]._id) {
            products[i].quantity = cart[j].quantity;
          } 
        }
      }
    } 

    if (wishlist.length > 0) {
      for (let i = 0; i < products.length; i++) {
        for (let j = 0; j < wishlist.length; j++) {
          if(wishlist[j].product_id === products[i]._id) {
            products[i].wishlist = true;
          }
        }
      }
    }
    setProducts(products);
    setProductsLoading(true);    
  }

  
  useEffect( () =>  {
    if (isLoaded === false) {
      
      fetcher(query);
    }
  });
  

  
    

  if (isLoaded===false) {
    return <div>Loading ... </div>;
  } else {
      return (
        <div style={{marginTop: "15%"}}> 
          <FilterProvider>
              <FilterBar/>
              <ProductDisplayComp lst = {products}/>
          </FilterProvider>
        </div>
    );
  }   

}

 