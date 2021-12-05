import React, { Component, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Button} from "react-bootstrap";
import { CartContext } from '../contexts/search-context';
import "../App.css";


async function removeFromCart(user_id, product_id, count) {
   
    
    await fetch('/removeFromCart', {
        
        method: 'POST',
        body: JSON.stringify(
            { 
                email: user_id ,
                product_id: product_id,
                quantity: count,

            }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

}

async function updateCart(user_id, product_id, count) {
   
    
    await fetch('/updateCart', {
        
        method: 'POST',
        body: JSON.stringify(
            { 
                email: user_id ,
                product_id: product_id,
                quantity: count,

            }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

}


export default function ProductCardCounterComp (props) {
    
    const carter = useContext( CartContext );
    const [prevCount, setPrevCount ] = useState(props.quantity);
    const [ originalCount, setOriginalCount ] = useState(props.quantity);
    const [ count, setCount ] = useState(props.quantity);
    
    const [ isLoaded, setLoading ] = useState(false);

    function Change() {

    }

    useEffect(() => {
      
        
        if(prevCount !== count) {
            
            if (count <= 0 ) {
                console.log('zeroed', count)
                removeFromCart('ammarsura@gmail.com', props.id, count);
            } else {
                updateCart('ammarsura@gmail.com', props.id, count);
            }
            setPrevCount(count);
        }
       
    });

    
    if (count === 0) {
        return (
            <div>
                <Button style={{display:"block", width: "80%"}}onClick={() => setCount(count + 1) }>Add to Cart</Button>
            </div>
            
        );
    } else {
        return (
            <div style={{display: "flex"}}>
                <div><Button style={{marginLeft: "3em"}}onClick={() => setCount(count + 1)}>+</Button></div>
                <div><h3 style={{paddingLeft: "1em", paddingRight: "1em"}}>{count}</h3></div>
                <div><Button  onClick={() => setCount(count - 1)}>-</Button></div>
            </div>
        );
    }
    
      
} 