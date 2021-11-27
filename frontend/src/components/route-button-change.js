import React, { Component } from "react";
import {Button} from "react-bootstrap";
import "../App.css";
import { useNavigate } from "@reach/router";
const RouteChange = () => {
    const navigate = useNavigate();
    
  

    return (
        
        <a href="/">Add New Address</a>
        
    );

}

export default RouteChange;