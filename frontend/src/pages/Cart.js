import React, { Component, useState, useEffect, useContext } from "react";
import "../App.css";
import ProductDisplayComp from '../components/product-display';
// import FilterBar from '../../../components/filter-bar';
// import { FilterProvider } from "../../../contexts/filter-context";
// import { CartContext } from "../../../contexts/cart-context";



export default function Cart() {
  

//   const carter = useContext( CartContext );
  const [ cart, setCart ] = useState([]);
  const [ cartIsLoaded, setCartLoading ] = useState(false);

  async function fetcher() {

    await fetch('/getCart/' + 'ammarsura@gmail.com' )
        .then(res => res.json())
        .then(result => {
            setCart(result);
            setCartLoading(true);
            
        });
    
  }

  useEffect(() => {
    if ( !cartIsLoaded ) {
        fetcher();
    } 

    
  });
  
    
  if ( !cartIsLoaded ) {
      return (
          <div>
              Loading...
          </div>
      );
  } else {
        console.log(cart);
    return (
        // <ProductDisplayComp lst = {cart.cart}/>
        <div>
            ok
        </div>
    );
    
  }
    
}

 