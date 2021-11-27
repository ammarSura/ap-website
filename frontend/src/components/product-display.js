import React, { Component, useState, useEffect } from "react";
import "../App.css";
import ProductCardGroupComp from "./product-card-group";


export default function ProductDisplayComp (props) {

    
  
    function looper() {
        
        const mainlst = [];
        for (let i = 0; i < props.lst.length; i = i + 3) {
            if (props.lst.length - i >= 3) {
            const sublst = props.lst.slice(i, i + 3);
            mainlst.push(sublst);

            } else {
                const sublst = props.lst.slice(i, props.lst.length);
                mainlst.push(sublst);
            }
        }

        const comps = mainlst.map( (prod) => 
        <ProductCardGroupComp key = {prod[0]._id} lst = {prod} /> );

        return comps;
    }
    

    
  
    return (
        <div>
            
            {looper()}
        </div>
    
        
    ); 
   

    
} 
        
      
    
