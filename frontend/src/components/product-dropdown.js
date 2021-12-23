import React, { Component, useEffect, useState } from "react";
import "../App.css";
import {Link} from 'react-router-dom';
import {Container, Row, Col, Image, Button, DropdownButton, Dropdown, List, ListGroup} from "react-bootstrap"
import Reviews from "../components/reviews";



export default function ProductDropdown(props) {


    // const [ product, setProduct ] = useState(null);
    // const [ size, setSize ] = useState(null);
    // // const [ currentSize, setCurrentSize ] = useState(null);
    // const [ wishString, setAddedToWishlist ] = useState("Add to Wishlist");
    // const [ cartString, setAddedToCart ] = useState("Add to Cart");
    // const [ isLoaded, setLoading ] = useState(false);

    

    useEffect(() =>  {
        
    });

    function looper() {
        const lst = props.sizes;
        
        const comps = lst.map((size) => 
          <Dropdown.Item key = {size}> {size} </Dropdown.Item> )
  
        return comps;
      };
    

   
    return (
        
            
        <div> 

            <Dropdown style={{
            marginTop: "5%", 
            marginBottom: "5%"
            }}>
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="light">
                Select Size
            </Dropdown.Toggle>

            <Dropdown.Menu variant="light">
                {/* <Dropdown.Item href="#/xs"> {props.sizes[0]} </Dropdown.Item>
                <Dropdown.Item href="#/s"> {props.sizes[0]} </Dropdown.Item>
                <Dropdown.Item href="#/m"> {props.sizes[0]} </Dropdown.Item>
                <Dropdown.Item href="#/l"> {props.sizes[0]} </Dropdown.Item>
                <Dropdown.Item href="#/xl"> {props.sizes[0]} </Dropdown.Item> */}
                {looper()}
            </Dropdown.Menu>
            </Dropdown>

            </div>
        );
}
    
