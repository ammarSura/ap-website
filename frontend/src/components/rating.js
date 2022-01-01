import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Button} from "react-bootstrap";
import "../App.css";



// export default class ProductCardComp extends Component {
export default function RatingComp (props) {
    
    function looper() {
        var lst = [];
        console.log(props.rating)
        for (let i = 0; i < Math.floor(props.rating); i++) {
            lst.push(1)
        }

        if (props.rating - Math.floor(props.rating) > 0.4) {
            lst.push(0.5)
        }

        const stars = lst.map(star => {
            if (star === 1) {
                return (<i class="fas fa-star"style={{color: "#fcba03"}}></i>)
            } else {
                return (<i class="fas fa-star-half-alt" style={{color: "#fcba03"}}></i>)
            }
        }
        )

        return stars;
    }
    
    return (
        looper()
    );
      
} 