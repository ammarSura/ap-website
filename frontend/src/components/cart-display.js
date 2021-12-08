import React, { Component } from "react";
import "../App.css";
import CartCardGroupComp from "../components/wishlist-card-group";


export default function CartDisplayComp() {
    function looper() {
        
        const mainlst = [];
        for (let i = 0; i < this.props.lst.length; i = i + 3) {
            if (this.props.lst.length - i >= 3) {
            const sublst = this.props.lst.slice(i, i + 3);
            mainlst.push(sublst);

            } else {
                const sublst = this.props.lst.slice(i, this.props.lst.length);
                mainlst.push(sublst);
            }
        }

        const comps = cart.map( (prod) => 
        <CartCardComp key = {prod[0]._id}  details = {prod}/>)

        return comps;
    }
    

    return (
        looper()
    );
} 