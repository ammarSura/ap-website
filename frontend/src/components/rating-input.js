import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Button} from "react-bootstrap";
import "../App.css";



// export default class ProductCardComp extends Component {
export default function RatingInputComp (props) {

    
    const [ maxStar, setMaxStar ] = useState(0);
    function starSetter(x) {
        setMaxStar(x);
    }
    
    function starLooper() {
        var lst = [];
        for (let i = 1; i < 6; i++) {
            lst.push(i)
        }

        
        const stars = lst.map(star => {
            if ( star <= maxStar) {
                return (<i class="fas fa-star"style={{color: "#fcba03"}} onClick={()=> starSetter(star)}></i>)
            } else {
                return (<i class="far fa-star"style={{color: "#fcba03"}} onClick={()=> starSetter(star)}></i>)
            }
            
            
        });
            
        

        

        return stars;
        }
    
    return (
        <div style={{marginTop: "10%"}}>
            hi
            {starLooper()}
        </div>
        
    );
      
} 