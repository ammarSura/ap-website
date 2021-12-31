import React, { Component, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Button} from "react-bootstrap";
import { CartContext } from '../contexts/cart-context';
import { useAuth0 } from "@auth0/auth0-react";
import "../App.css";





export default function ProductCardCounterComp (props) {
    
    const carter = useContext( CartContext );
    const [prevCount, setPrevCount ] = useState(false);
    const [ count, setCount ] = useState(false);
    const [ countLoaded, setCountLoading ] = useState(false);
    const { user, isAuthenticated } = useAuth0();

  
    

    async function removeFromCart( product_id, count, size) {
        console.log('what')
    
        await fetch('/removeFromCart', {
            
            method: 'POST',
            body: JSON.stringify(
                { 
                    email: user.email ,
                    product_id: product_id,
                    quantity: count,
                    size: size,
                    price: props.price
                    
    
                }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        // carter.setCartLoading(false);
        window.location.reload()
    
    }
    
    async function updateCart( product_id, count, size) {
       console.log("prie", props.price);
        
        await fetch('/addToCart', {
            
            method: 'POST',
            body: JSON.stringify(
                { 
                    email: user.email ,
                    product_id: product_id,
                    quantity: count,
                    size: size,
                    price: props.price
    
                }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        // carter.setCartLoading(false);
        window.location.reload()
    
    }

    useEffect(() => {
        if ( !countLoaded ) {
            console.log('okau man', count)
            let quantity = 0;
            for (let i = 0; i < carter.cart.cart.length; i++) {
                console.log(carter.cart.cart[i]);
                if (carter.cart.cart[i].product_id===props.id) {
                    quantity = carter.cart.cart[i].quantity;
                }
                
              }

            console.log(quantity);

            setCount(quantity);
            setPrevCount(quantity);
            setCountLoading(true);
        } else {
            if(prevCount !== count) {
                console.log('here', count)
                if (count <= 0 ) {
                    console.log('zeroed', count)
                    removeFromCart( props.id, count, props.size);
                } else {
                    updateCart( props.id, count, props.size);
                }
                setPrevCount(count);
            }
        }
        
        
       
    });

    
    if (count > 0) {
        return (
            <div style={{display: "flex"}}>
                <div><Button style={{marginLeft: "2em"}}onClick={() => setCount(count + 1)}>+</Button></div>
                <div><h3 style={{paddingLeft: "1em", paddingRight: "1em"}}>{count}</h3></div>
                <div><Button  onClick={() => setCount(count - 1)}>-</Button></div>
            </div>
        );
    } else {
        return null;
    }
    
      
} 