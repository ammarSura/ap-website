import React, { Component, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Button} from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { CartContext } from "../contexts/cart-context";


import "../App.css";






export default function ProductCardWishlistComp (props) {
    
    const carter = useContext( CartContext );
    const [ wishlist, setWishlist ] = useState(null);
    const [ wishlistIsLoaded, setWishlistLoading ] = useState(false);
    const { user, isAuthenticated, isLoading } = useAuth0();  // console.log('wish', user)
    const [ wishStatus, setWishStatus ] = useState(null);
    const [ prevWishStatus, setPrevWishStatus ] = useState(null);
    const [ statusIsLoaded, setStatusLoading ] = useState(false);

    

    

    async function removeFromWishlist() {
        
        await fetch('/removeFromWishlist', {
            
            method: 'POST',
            body: JSON.stringify(
                { 
                    email: user.email ,
                    product_id: props.id,
                    
                }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        setPrevWishStatus(false);
        window.location.reload()
    }

    async function addToWishlist() {
   
        
        await fetch('/addToWishlist', {
            
            method: 'POST',
            body: JSON.stringify(
                { 
                    email: user.email ,
                    product_id: props.id,
    
                }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        setPrevWishStatus(true);
        window.location.reload()
    
    
    }

    function changer() {

    }
    

    

    useEffect(() => {
        if ( carter.wishlistIsLoaded && !wishlistIsLoaded ) {
            console.log(carter)
            setWishlist(carter.wishlist.wishlist);
            setWishlistLoading(true);

            console.log('yeller', carter.wishlist.wishlist);
        }

        if ( wishlistIsLoaded && !statusIsLoaded) {
            console.log('heres', wishlist)
            setWishStatus(false);
            setPrevWishStatus(false);
            for (let i = 0; i < wishlist.length; i++) {
                if (wishlist[i].product_id === props.id ) {
                    setWishStatus(true);
                    setPrevWishStatus(true)
                }   
            }

            setStatusLoading(true)
        }

        if ( prevWishStatus !== wishStatus ) {
            if ( wishStatus ) {
                addToWishlist();
                
            } else {
                removeFromWishlist();
                
            }
        }

       
      
        
       
    });

    if ( statusIsLoaded ) {
        if ( wishStatus ) {
            return (
                <i class="fas fa-heart" style={{color: "#eb3455", fontSize: "1.2em"}} onClick={() => setWishStatus(false) }></i>
            );
        } else {
            return (
                <i class="far fa-heart"style={{color: "#eb3455", fontSize: "1.2em"}} onClick={() => setWishStatus(true) }></i>
            );
        }
    } else {
        return (
            <div>
                loading...
            </div>
        )
    }
    
                    
      
} 