import React, { Component, useState, useEffect, useContext } from "react";
import "../App.css";
import ProductDisplayComp from '../components/product-display';
import { useAuth0 } from "@auth0/auth0-react";

// import FilterBar from '../../../components/filter-bar';
// import { FilterProvider } from "../../../contexts/filter-context";
// import { CartContext } from "../../../contexts/cart-context";



export default function Cart() {
  

//   const carter = useContext( CartContext );
  const [ cart, setCart ] = useState([]);
  const [ cartIsLoaded, setCartLoading ] = useState(false);
  const { user, isAuthenticated } = useAuth0();

  async function fetcher() {

    await fetch('/getCart/' + user.email )
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

 