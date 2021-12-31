import React, { Component, useState, useEffect, useContext } from "react";
import { Card, Button} from "react-bootstrap";

import "../App.css";
import { useAuth0 } from "@auth0/auth0-react";
import { CartContext } from '../contexts/cart-context';
import ProductCardCounterComp from '../components/product-card-counter';





export default function CartCardComp(props) {

    const [ isLoaded, setLoading ] = useState(false);
    const [ product, setProduct ] = useState(null);
    const [ item, setItem ] = useState(null);

    
    function Butter() {
          
        window.location.replace('/product/'+ product.product_id); 
    
      }
  
    

    useEffect( () => {
        
        if ( !isLoaded ) {
            fetch('/getProduct/' + props.product_id)
                .then(res => res.json())
                .then(result => {
                setProduct(result[0]);
                setLoading(true);
                
            });
        }
    }  
    );

    
    if ( isLoaded ) {
        console.log('price', props.price)
        return (
         
        <Card style={{width : "20em", height : "38em"}} >
            <Card.Img variant="top" src={product.image01} style = {{width:"15em", marginLeft: "auto", marginRight: "auto" ,marginTop:"10%"}}/>

            <Card.Body style={{height:"80px", marginLeft:"15%"}}>
              {product.name.length < 25 ?
              <Card.Title onClick={() => Butter()} className="product-card-title" style={{cursor: "pointer"}}>{product.name}
              </Card.Title>
              :
              <Card.Title onClick={() => Butter()} className="product-card-title" style={{cursor: "pointer"}}>{product.name.slice(0, 21) + '...'}
              </Card.Title>}

              <Card.Text className="product-card-text">
                  {product.price}  
              </Card.Text>
              <Card.Text className="product-card-text">
                  {product.gender}
              </Card.Text>
              {/* <div style={{display: "grid"}}> */}
              {/* <ProductCardWishlistComp style={{marginBottom: "100px"}}id={props.id} wishlist={props.wishlist}/> */}

              <ProductCardCounterComp id={props.product_id} quantity={props.quantity} size={props.size} price={product.price}/>
              {/* </div> */}

            </Card.Body>
        </Card>
            
        );
    } else {
        return (
            <div>
                Loading...
            </div>
        );
    }
    
    
}

 