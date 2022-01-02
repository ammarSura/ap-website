import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Button} from "react-bootstrap";
import "../App.css";
import ProductCardCounterComp from './product-card-counter';
import ProductCardWishlistComp from './product-card-wishlist';
import RatingComp from './rating';


// export default class ProductCardComp extends Component {
export default function ProductCardComp (props) {
    
    const [ link, setLink ] = useState(null);
    const [ isLoaded, setLoading ] = useState(false);

    useEffect(() => {
      if ( isLoaded === false) {
        setLink(props.id);
        setLoading(true);
      }
    });

    function Butter() {
          
      window.location.replace('/product/'+ props.id); 
  
    }

    if (isLoaded === true) {
      // console.log()
      return (
       
        <Card style={{width : "20em", height : "41em"}} >
            <Card.Img variant="top" src={props.image01} style = {{width:"15em", marginLeft: "auto", marginRight: "auto" ,marginTop:"10%"}}/>

            <Card.Body style={{height:"80px", marginLeft:"15%"}}>
            <ProductCardWishlistComp style={{marginBottom: "100px"}}id={props.id} wishlist={props.wishlist}/>
              {props.name.length < 25 ?
              <Card.Title onClick={() => Butter()} className="product-card-title" style={{cursor: "pointer"}}>{props.name}
              </Card.Title>
              :
              <Card.Title onClick={() => Butter()} className="product-card-title" style={{cursor: "pointer"}}>{props.name.slice(0, 21) + '...'}
              </Card.Title>}

              <Card.Text className="product-card-text">
                ₹ {props.price}  
              </Card.Text>
              <Card.Text className="product-card-text">
                  {props.gender}
              </Card.Text>
              <Card.Text className="product-card-text">
                  {props.rating}
                  <RatingComp rating={props.rating}/>
              </Card.Text>
              <div style={{display: "grid"}}>
              

              {/* <ProductCardCounterComp id={props.id} quantity={props.quantity}/> */}
              </div>

            </Card.Body>
        </Card>
      );
    } else {
      return (
        <div styl={{marginTop: "20%"}}>
          <p>Loading...</p>
        </div>
      );
    }
      
} 