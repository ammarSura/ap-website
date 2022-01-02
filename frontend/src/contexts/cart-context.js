import React, { createContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";



export const CartContext = createContext();

// This context provider is passed to any component requiring the context
export function CartProvider({children}) {

  const [ cart, setCart ] = useState([]);
  const [ User, setUser ] = useState(null);
  const [ userIsLoaded, setUserLoading ] = useState(false);
  const [ wishlist, setWishlist ] = useState([]);
  const [ cartIsLoaded, setCartLoading ] = useState(false);
  const [ wishlistIsLoaded, setWishlistLoading ] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuth0();  
  console.log('user_cart', user)


    async function fetchCart() {
        await fetch('/getCart/' + user.email )
            .then(res => res.json())
            .then(result => {
            // cart = result.cart;
                setCart(result);
                setCartLoading(true);
                
            });
    }

    console.log(cart);
    async function fetchWishlist() {
        await fetch('/getWishlist/' + user.email )
        .then(res => res.json())
        .then(result => {
            setWishlist(result);
            setWishlistLoading(true);
        });

    }

    async function fetchUser() {
        await fetch('/getUser/' + user.email )
        .then(res => res.json())
        .then(result => {
            // setWishlist(result);
            // setWishlistLoading(true);
            console.log('user', result[0])
            setUser(result[0]);
            setUserLoading(true);
        });
    }
    

    useEffect ( () => {
        if ( !isLoading ) {
            if( !userIsLoaded && isAuthenticated  ) {
                
                fetchUser();
                

            } else {
                // console.log('oker', user.name);
                if ( !cartIsLoaded && isAuthenticated) {
                    fetchCart();
                    
                }
        
                if ( !wishlistIsLoaded && isAuthenticated) {
                    fetchWishlist();
                }
            }
        } 
        
    })
    if ( cartIsLoaded && wishlistIsLoaded && isAuthenticated ) {
        return (
            <CartContext.Provider value={{ cart, setCart, cartIsLoaded, setCartLoading, wishlist, setWishlist, wishlistIsLoaded, setWishlistLoading, User, setUser, userIsLoaded, setUserLoading }} >
            {children}
            </CartContext.Provider>
        );
    
    } else {
        return (
            <div>
                <CartContext.Provider value={{ cart, setCart, cartIsLoaded, setCartLoading, wishlist, setWishlist, wishlistIsLoaded, setWishlistLoading, User, setUser, userIsLoaded, setUserLoading }} >
            {children}
            </CartContext.Provider>
            </div>
        )
    }
  
};
