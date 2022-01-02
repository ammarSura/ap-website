import React, { Component, useState, useEffect, useContext } from "react";
import { Card, Button} from "react-bootstrap";

import "../App.css";
import { useAuth0 } from "@auth0/auth0-react";
import { CartContext } from '../contexts/cart-context';
import ProductCardCounterComp from '../components/product-card-counter';
import ProductCardWishlistComp from '../components/product-card-wishlist';





export default function CartCardComp(props) {

    const [ isLoaded, setLoading ] = useState(false);
    const [ product, setProduct ] = useState(null);
    const [ item, setItem ] = useState(null);
    const carter = useContext( CartContext );
    const [ wishlist, setWishlist ] = useState(false);
    const [ wishlistLoaded, setWishlistLoading ] = useState(false);


    
    function Butter() {
          
        window.location.replace('/product/'+ props.product_id); 
    
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

        if ( !wishlistLoaded && isLoaded) {
            // setWishlist(carter)
            for (let i = 0; i < carter.wishlist.wishlist.length; i++) {
                if ( product.product_id === carter.wishlist.wishlist.product_id) {
                    setWishlist(true)
                }
                
            }
            setWishlistLoading(true)
        }
    }  
    );

    
    if ( isLoaded && wishlistLoaded) {
        console.log('price', product)
        return (
         
        <Card style={{width : "20em", height : "43em"}} >
            <Card.Img variant="top" src={product.image01} style = {{width:"15em", marginLeft: "auto", marginRight: "auto" ,marginTop:"10%"}}/>

            <Card.Body style={{height:"80px", marginLeft:"15%"}}>
            <ProductCardWishlistComp style={{marginBottom: "100px"}}id={props.product_id} wishlist={wishlist}/>
              {product.name.length < 25 ?
              <Card.Title onClick={() => Butter()} className="product-card-title" style={{cursor: "pointer"}}>{product.name}
              </Card.Title>
              :
              <Card.Title onClick={() => Butter()} className="product-card-title" style={{cursor: "pointer"}}>{product.name.slice(0, 21) + '...'}
              </Card.Title>}

              <Card.Text className="product-card-text">
                ₹ {product.price}  
              </Card.Text>
              <Card.Text className="product-card-text">
                  {props.size}  
              </Card.Text>
              <Card.Text className="product-card-text">
                  {product.gender}
              </Card.Text>
              {/* <div style={{display: "grid"}}> */}
              

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

 