import React, { Component, useState, useEffect } from "react";
import "../App.css";
import ProductDisplayComp from "../components/product-display";



// console.log(query);

export default function Results() {
  
  const [products, setProducts] = useState([]);
  const [isLoaded, setLoading] = useState(false);

  const query = window.location.href.slice(30);
  console.log(query);
  
  useEffect( () =>  {
    if (isLoaded === false) {
      fetch('/search/byterm/' + query)
      .then(res => res.json())
      .then(result => {
        // this.setState({
        //   isLoaded: true,
        //   products: result
        // });
        setProducts(result);
        setLoading(true);
      });
    }
  });
  

  
    

  if (isLoaded===false) {
    return <div>Loading ... </div>;
  } else {
      return (
        <div style={{marginTop: "15%"}}> 
            <ProductDisplayComp lst = {products}/>
        </div>
    );
  }   

}

 