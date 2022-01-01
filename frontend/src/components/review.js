import React, { Component } from "react"; 
import "../App.css"


export default function Review(props){
   
   console.log(props.name)
    
    return(
        <div>
            
            {/* <ul style={{listStyleType:"none"}}> */}
                
                <p>"{props.review}"</p>
                <p>- {props.name}</p>
                
            
        </div>
    );  
    
}