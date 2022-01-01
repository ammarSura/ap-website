import React, { Component } from "react"; 
import "../App.css"

export default function Address(props){
   
    
        return(
            <div style={{display: "flex", flexDirection: "column"}}>
                
                {/* <ul style={{listStyleType:"none"}}> */}
                
                    <div><b>Address name: {props.name}</b></div>
                    
                    <div>Line 1: {props.line1}</div>
                    <div>Line 2: {props.line2}</div>
                    <div>City: {props.city}</div>
                    <div>Pincode: {props.pincode}</div>
                    <div>State: {props.state}</div>
            </div>
        );  
    
}