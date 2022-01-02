import React, { Component, useState, useEffect } from "react";
import "../App.css";
import WishlistDisplayComp from "../components/wishlist-display";
import { useAuth0 } from "@auth0/auth0-react";


export default function Wishlist() {


  const [ products, setProducts ] = useState(null);
  const [ isLoaded, setLoading ] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuth0();  // console.log('wish', user)
  
  useEffect(() =>  {

    if( !isLoaded && !isLoading ) {
      fetch('/getWishlist/' + user.email)
        .then(res => res.json())
        .then(result => {
         setProducts(result);
          setLoading(true);
          console.log(result.wishlist)
      });
    }
  });



 
    if (!isLoaded) {
      return <div>Loading ... </div>;
    } else {
        // console.log(products.wishlist)
        return (
          <div style={{marginTop: "12.5%"}}> 
              <h1 style={{marginLeft: "15%", marginBottom: "2.5%"}}>Wishlist</h1>
              {(products.wishlist.length > 0) ?
               <WishlistDisplayComp lst = {products.wishlist}/>
              :
              <h2>No items in wishlist yet</h2>}
              
              {/* <h1>{products.wishlist}</h1> */}
          </div>
      );
    }   
    
  
}

 