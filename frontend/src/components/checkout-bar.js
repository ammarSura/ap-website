import React, { Component, useState, useEffect, useContext } from "react";
import { Card, Button} from "react-bootstrap";

import "../App.css";
import { useAuth0 } from "@auth0/auth0-react";
import { CartContext } from '../contexts/cart-context';
import ProductCardCounterComp from './product-card-counter';





export default function CheckoutComp(props) {

    const [ total, setTotal ] = useState(0);
    const [ totalIsLoaded, setTotalLoading ] = useState(false);

    function tally(lst) {
        let t = 0;
        for (let i = 0; i < lst.length; i++) {
            t = t + lst[i].quantity * lst[i].price
            
        }
        setTotal(t);
        setTotalLoading(true);
    }

    function checkout() {
        window.location.replace('/checkout'); 

    }

    useEffect( () => {
        if (!totalIsLoaded) {
            tally(props.cart);
        } else {
            console.log('tally-ho', total);
        }
    });
    console.log(props.cart)
    if (totalIsLoaded) {
        return (
            <div>
                 <h3>Sub-Total: {total}</h3>
                 <p>Shipping, taxes, and discount codes calculated at checkout.</p>
                <button onClick={() => checkout()}>Checkout</button>   
            </div>
           
        );
        
    } else {
        return (
            <div>
                loading...
            </div>
        )
    }

    
   
    
    
}

 