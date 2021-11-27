import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Button} from "react-bootstrap";
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
    
    // const [ link, setLink ] = useState(null);
    console.log('q', props.quantity);
    const [prevCount, setPrevCount ] = useState(props.quantity);
    const [ originalCount, setOriginalCount ] = useState(props.quantity);
    const [ count, setCount ] = useState(props.quantity);
    
    const [ isLoaded, setLoading ] = useState(false);

    function Change() {

    }

    useEffect(() => {
      
   
        if(prevCount !== count) {
            console.log('Changed!');
            // if (originalCount === 0) {
            //     addToCart('ammarsura@gmail.com', props.id, count)
            //     setOriginalCount(count);
            // } else 
            // updateCart('ammarsura@gmail.com', props.id, count);
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
                <Button onClick={() => setCount(count + 1) }>Add to Cart</Button>
                {/* <Button>-</Button> */}
            </div>
            
        );
    } else {
        return (
            <div>
                <Button onClick={() => setCount(count + 1)}>+</Button>
                <h3>{count}</h3>
                <Button onClick={() => setCount(count - 1)}>-</Button>
            </div>
            
        );
    }
    
      
} 