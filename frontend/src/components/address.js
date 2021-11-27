import React, { Component } from "react"; 
import "../App.css"

export default class Address extends Component{
   
    render(){
        return(
            <div>
                
                <ul style={{listStyleType:"none"}}>
                    <li><h3>{this.props.name}</h3></li>
                    <li>{this.props.line1}</li>
                    <li>{this.props.line2}</li>
                    <li>{this.props.city}</li>
                    <li>{this.props.pincode}</li>
                    <li>{this.props.state}</li>
                </ul>
            </div>
        );  
    }
}