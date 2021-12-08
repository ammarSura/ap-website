import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

// This context provider is passed to any component requiring the context
export function CartProvider({ children }) {
  const [ cart, setCart ] = useState([]);
  const [ wishlist, setWishlist ] = useState([]);
  const [ cartIsLoaded, setCartLoading ] = useState(false);
  const [ wishlistIsLoaded, setWishlistLoading ] = useState(false);

    async function fetchCart() {
        await fetch('/getCart/' + 'ammarsura@gmail.com' )
            .then(res => res.json())
            .then(result => {
            // cart = result.cart;
                setCart(result);
                setCartLoading(true);
                
            });
    }
    async function fetchWishlist() {
        await fetch('/getWishlist/' + 'ammarsura@gmail.com' )
        .then(res => res.json())
        .then(result => {
            setWishlist(result);
            setWishlistLoading(true);
        });

    }
    

    useEffect ( () => {
        if ( !cartIsLoaded ) {
            fetchCart();
        }

        if ( !wishlistIsLoaded ) {
            fetchWishlist()
        }
    })
    if ( cartIsLoaded && wishlistIsLoaded ) {
        return (
            <CartContext.Provider value={{ cart, setCart, cartIsLoaded, setCartLoading, wishlist, setWishlist, wishlistIsLoaded, setWishlistLoading }} >
            {children}
            </CartContext.Provider>
        );
    
    } else {
        return (
            <div style={{marginTop:"1000px"}}>
                1Loading...
            </div>
        )
    }
  
};
