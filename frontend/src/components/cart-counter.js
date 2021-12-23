import React, { useState, useEffect, useContext } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { CartContext } from "../contexts/cart-context";



export default function CartCounter(props) {
    
    const carter = useContext( CartContext );
    const [ cart, setCart ] = useState([]);
    const [ cartIsLoaded, setCartLoading ] = useState(false);
    
    

    useEffect( () => {
        if ( !cartIsLoaded ) {
            setCartLoading(carter.cartIsLoaded);
            setCart(carter.cart.cart);
        } else {
            console.log('carterer', cart);
        }
    });
    if ( cartIsLoaded ) {
        return (
            <div className="circle"> 
                {cart.length}
            </div>
        );
    } else {
        return (
        <div>
            loading...
        </div>
        );
    }
}
