import React, { Component, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Button} from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { CartContext } from "../contexts/cart-context";


import "../App.css";






export default function ProductCardWishlistComp (props) {
    
    // const carter = useContext( CartContext );

    const [ wishlist, setWishlist ] = useState([]);
    const [ wishlistIsLoaded, setWishlistLoading ] = useState(false);

    const [ prevWishStatus, setPrevWishStatus ] = useState(false);
    const [ wishStatus, setWishStatus ] = useState(false);
    const [ statusIsLoaded, setStatusLoading ] = useState(false);
    const [ id1, setId ] = useState(props.id);
    const { user, isAuthenticated } = useAuth0();
    
    const [ isLoaded, setLoading ] = useState(false);

    

    async function removeFromWishlist(product_id) {
   
        
        await fetch('/removeFromWishlist', {
            
            method: 'POST',
            body: JSON.stringify(
                { 
                    email: user.email ,
                    product_id: product_id,
                    
                }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        setPrevWishStatus(false);
        window.location.reload()
    }

    async function addToWishlist(product_id) {
   
        console.log('asda', product_id);
        await fetch('/addToWishlist', {
            
            method: 'POST',
            body: JSON.stringify(
                { 
                    email: user.email ,
                    product_id: product_id,
    
                }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    
        setPrevWishStatus(true);
        window.location.reload()
    
    }
    

    

    useEffect(() => {

        if ( !statusIsLoaded ) {
            setWishStatus(props.wishlist);
            console.log(props.wishlist)
            setPrevWishStatus(props.wishlist);
            setStatusLoading(true);
            
        } else {
            console.log(wishStatus, props.wishlist);
            if (prevWishStatus != wishStatus) {
                console.log('chaneged')
                if (wishStatus) {
                    console.log('as')
                    addToWishlist( props.id);
                } else {
                    console.log('remov')
                    removeFromWishlist( props.id);
                }
            }
        }
      
        
       
    });

    
    if (!wishStatus) {
        console.log(wishStatus)
        return (
            <div>
                <Button variant="secondary" size="lg" style={{display:"block", width: "80%", marginBottom: "1em"}} onClick={() => setWishStatus(true) }>Add to Wishlist
                </Button>
                
            </div>
            
        );
    } else {
        console.log(wishStatus)
        return (
            <div>
                <Button variant="secondary" size="lg" style={{display:"block", width: "80%", marginBottom: "1em"}} onClick={() => setWishStatus(false) }>
                    Remove from Wishlist
                </Button>
            </div>
            
        );
    }
    
      
} 