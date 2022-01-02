import React, { Component } from "react";
import "../App.css";
import WishlistCardGroupComp from "../components/wishlist-card-group";
import WishlistCardComp from "./wishlist-card";


export default function WishlistDisplayComp(props) {
    function looper() {
        
        // const mainlst = [];
        // for (let i = 0; i < this.props.lst.length; i = i + 3) {
        //     if (this.props.lst.length - i >= 3) {
        //     const sublst = this.props.lst.slice(i, i + 3);
        //     mainlst.push(sublst);

        //     } else {
        //         const sublst = this.props.lst.slice(i, this.props.lst.length);
        //         mainlst.push(sublst);
        //     }
        // }

        const comps = props.lst.map( (prod) => 
        // <WishlistCardGroupComp key = {prod[0].id} lst = {prod}/>
        <WishlistCardComp key={prod.id} id={prod.product_id}/>
        );

        return comps;
    }
    

    
      return (
          <div style={{marginLeft: "37%",marginRight: "40%"}}>
              {looper()}
          </div>  
       
        
      );
    
} 