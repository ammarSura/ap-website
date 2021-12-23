import React, { Component, useState, useEffect, useContext } from "react";
import "../../../App.css";
import ProductDisplayComp from '../../../components/product-display';
import FilterBar from '../../../components/filter-bar';
import { FilterProvider } from "../../../contexts/filter-context";
import { CartContext } from "../../../contexts/cart-context";



export default function WomenTrousers() {
  

  const carter = useContext( CartContext );
  const [ cart, setCart ] = useState([]);
  const [ cartIsLoaded, setCartLoading ] = useState(false);
  const [ wishlist, setWishlist ] = useState([]);
  const [ wishlistIsLoaded, setWishlistLoading ] = useState(false);
  
  
  const [ products, setProducts ] = useState([]);
  const [ productsLoaded, setProductsLoading ] = useState(false);
  
  

  async function fetcher() {

    var products;
    
    await fetch('/search/women/trousers')
    .then(res => res.json())
    .then(result => {
      products = result;
    });

    for (let i = 0; i < products.length; i++) {
      products[i].quantity = 0;
      products[i].wishlist = false;  
    }

    if (cart.length > 0) {
      for (let i = 0; i < products.length; i++) {
        for (let j = 0; j < cart.length; j++) {
          if(cart[j].product_id === products[i].id) {
            products[i].quantity = cart[j].quantity;
          } 
        }
      }
    }
    
    if (wishlist.length > 0) {
      for (let i = 0; i < products.length; i++) {
        for (let j = 0; j < wishlist.length; j++) {
          if(wishlist[j].product_id === products[i].id) {
            products[i].wishlist = true;
          }
        }
      }
    }

    setProducts(products);
    setProductsLoading(true);  
    
  }

  useEffect(() => {
    if ( productsLoaded === false ) {
      if ( cartIsLoaded && wishlistIsLoaded ) {
        fetcher();
      }
      
    }

    if ( !cartIsLoaded) {
      setCartLoading(carter.cartIsLoaded);
      setCart(carter.cart.cart);
    }
    if ( !wishlistIsLoaded ) {
      setWishlistLoading(carter.wishlistIsLoaded);
      setWishlist(carter.wishlist.wishlist);
      // console.log(carter.wishlist.wishlist)
    }

    
  });
  
    
  if (productsLoaded === false) {
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

 