import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Button} from "react-bootstrap";
import "../App.css";
import ProductCardCounterComp from './product-card-counter';


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
      return (
       
        <Card style={{width : "20em", height : "35em"}} >
            <Card.Img variant="top" src={props.image01} style = {{width:"15em", marginLeft: "auto", marginRight: "auto" ,marginTop:"10%"}}/>
            <Card.Body style={{height:"80px", marginLeft:"15%"}}>
              <Card.Title onClick={() => Butter()} className="product-card-title" style={{cursor: "pointer"}}>{props.name}</Card.Title>
              <Card.Text className="product-card-text">
                  {props.price}
                  
              </Card.Text>
              {/* <Button variant="secondary" >-</Button>
              <Button variant="secondary" >+</Button>
               */}
               <ProductCardCounterComp id={props.id} quantity={props.quantity}/>
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