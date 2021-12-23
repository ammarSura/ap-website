import React, { Component } from "react";
import { CardGroup, } from "react-bootstrap";
import "../App.css";
import WishlistCardComp from "./wishlist-card";


export default class  WishlistCardGroupComp extends Component {

    looper() {
      const comps = this.props.lst.map((prod) => 
        <WishlistCardComp key = {prod.id} id = {prod.product_id} />)

      return comps;
    };

    
    render() {
      return (
       <CardGroup style={{marginLeft:"10%", marginRight:"10%", alignContent:"center"}}>
           
           {this.looper()}
       </CardGroup>
      )
    } 
} 