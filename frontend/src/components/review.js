import React, { Component } from "react"; 
import "../App.css"


export default class Review extends Component{
   
   
    render(){
        return(
            <div>
                
                {/* <ul style={{listStyleType:"none"}}> */}
                    
                    <h3>"{this.props.review}"</h3>
                    <p>- {this.props.name}</p>
                    
                
            </div>
        );  
    }
}