import React, { Component, useEffect, useState } from "react";
import { CardGroup, } from "react-bootstrap";
import "../App.css";
import ProductCardComp from "./product-card";


export default function ProductCardGroupComp(props) {
    
    
    function looper() {
      const lst = props.lst;
      
      const comps = lst.map((prod) => 
        <ProductCardComp key = {prod.id} id = {prod.id} name = {prod.name} image01={prod.image01} price={prod.price} quantity={prod.quantity} wishlist={prod.wishlist} gender = {prod.gender}/>)

      return comps;
    };

    
    
      return (
       <CardGroup style={{marginLeft:"10%", marginRight:"10%", alignContent:"center"}}>
           
           {looper()}
       </CardGroup>
      // <h1>{cart.size}</h1>
      );
    
} 