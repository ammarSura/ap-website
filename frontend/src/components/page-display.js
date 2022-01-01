import React, { Component, useState, useEffect, useContext } from "react";
import "../App.css"
import { Container, Row, Col } from "react-bootstrap";
import ProductDisplayComp from "./product-display";
import FilterBar from './filter-bar';
import { FilterProvider } from "../contexts/filter-context";
import { CartContext } from "../contexts/cart-context";
import { SortProvider } from "../contexts/sort-context";
import SortBar from "./sort-bar";



export default function PageDisplay(props) {
  

  const carter = useContext( CartContext );
  const [ cart, setCart ] = useState([]);
  const [ cartIsLoaded, setCartLoading ] = useState(false);
  const [ wishlist, setWishlist ] = useState([]);
  const [ wishlistIsLoaded, setWishlistLoading ] = useState(false);
  
  
  const [ Products, setProducts ] = useState([]);
  const [ productsLoaded, setProductsLoading ] = useState(false);
  
  
  // const [ firstPr]
  async function fetcher() {

    var products;
    console.log(21)
    await fetch(props.string)
    .then(res => res.json())
    .then(result => {
      products = result;
      console.log('weewoo',result)
    });
    

    // if (products.length === 0) {
    //   console.log(cart)
    // }

    for (let i = 0; i < products.length; i++) {
      products[i].quantity = 0;
      products[i].wishlist = false;  
    }


    console.log(1)

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
    console.log(products, products.length, 'okay112')
    setProducts(products);
    setProductsLoading(true);  
    
  }

  useEffect(() => {
    if ( productsLoaded === false ) {
      console.log(1, cartIsLoaded, wishlistIsLoaded);
      if ( cartIsLoaded && wishlistIsLoaded ) {
        console.log('we are here')
        fetcher();
        console.log('okay,', cart, wishlist);
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
    console.log('why')
    return <div style={{marginTop: "15%"}}>Loading ... </div>;
  } else {
    return (
      
          // <div style={{marginTop: "15%"}}>
          <FilterProvider>
        <SortProvider>
          <div style={{display: "grid", gridTemplateColumns: "20% 80%", marginBottom: "5%", marginTop: "15%", marginLeft: "10%"}}> 
          
              <div>
                  <SortBar/>
              <FilterBar/>

              </div>
              <div style={{marginLeft: "15%"}}>
              <ProductDisplayComp lst = {Products}/>
              </div>
              
           
          </div>

          
          </SortProvider>
           </FilterProvider>
          
    );
  }
    
}

 