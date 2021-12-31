import React, { useState, useEffect, useContext } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { CartContext } from "../contexts/cart-context";



export default function CartCounter(props) {
    
    const carter = useContext( CartContext );
    const [ cart, setCart ] = useState([]);
    const [ cartIsLoaded, setCartLoading ] = useState(false);
    const [ cartQuantity, setCartQuantity ] = useState(null);
    const [ cartQuantityIsLoaded, setCartQuantityLoading ] = useState(false);
    
    function getQuantity(lst) {
        console.log('hwerer')
        let q = 0;
        for (let i = 0; i < lst.length; i++) {
            console.log('h', lst[i]);
            q = q + lst[i].quantity
            
        }
        console.log('qwe', q);
        setCartQuantity(q);

    }

    useEffect( () => {
        if ( !cartIsLoaded ) {
            setCartLoading(carter.cartIsLoaded);
            setCart(carter.cart.cart);
            
        } else {
            
                if ( !cartQuantityIsLoaded ) {
                    if (carter.cart.cart.length > 0) {
                        getQuantity(carter.cart.cart);
                    
                    } else {
                        setCartQuantity(0);   
                    }

                    setCartQuantityLoading(true);
                }
                
              
        }
    });
    if ( cartIsLoaded && cartQuantityIsLoaded ) {
        return (
            <div className="circle"> 
                {cartQuantity}
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
