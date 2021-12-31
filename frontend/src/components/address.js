import React, { Component } from "react"; 
import "../App.css"

export default function Address(props){
   
    
        return(
            <div>
                
                <ul style={{listStyleType:"none"}}>
                    <li><h3>{props.name}</h3></li>
                    <li>{props.name}</li>
                    <li>{props.line1}</li>
                    <li>{props.line2}</li>
                    <li>{props.city}</li>
                    <li>{props.pincode}</li>
                    <li>{props.state}</li>
                </ul>
            </div>
        );  
    
}