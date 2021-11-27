import React, { Component, useState, useEffect } from "react";
import "../App.css";
import WishlistDisplayComp from "../components/wishlist-display";

export default function Wishlist() {


  const [products, setProducts] = useState(null);
  const [isLoaded, setLoading] = useState(false);
  
  useEffect(() =>  {
  
    fetch('/getWishlist/ammarsura@gmail.com')
      .then(res => res.json())
      .then(result => {
        setProducts(result[0]);
        setLoading(true);
      });
  });


 
    if (!isLoaded) {
      return <div>Loading ... </div>;
    } else {
        console.log(products.wishlist)
        return (
          <div style={{marginTop: "15%"}}> 
              <WishlistDisplayComp lst = {products.wishlist}/>
          </div>
      );
    }   
    
  
}

 