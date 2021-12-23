import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Button} from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

import "../App.css";






export default function ProductCardWishlistComp (props) {
    
    
    const [ prevWishStatus, setPrevWishStatus ] = useState(props.wishlist);
    const [ wishStatus, setWishStatus ] = useState(props.wishlist);
    const { user, isAuthenticated } = useAuth0();
    
    const [ isLoaded, setLoading ] = useState(false);

    console.log('nnn', props.wishlist);

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
        // window.location.reload()
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
        // window.location.reload()
    
    }
    

    

    useEffect(() => {
      
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
       
    });

    
    if (!wishStatus) {
        return (
            <div>
                <Button variant="secondary" size="lg" style={{display:"block", width: "80%", marginBottom: "1em"}} onClick={() => setWishStatus(true) }>Add to Wishlist
                </Button>
                
            </div>
            
        );
    } else {
        return (
            <div>
                <Button variant="secondary" size="lg" style={{display:"block", width: "80%", marginBottom: "1em"}} onClick={() => setWishStatus(false) }>
                    Remove from Wishlist
                </Button>
            </div>
            
        );
    }
    
      
} 