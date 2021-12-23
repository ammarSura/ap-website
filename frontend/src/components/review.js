import React, { Component } from "react"; 
import "../App.css"


export default class Review extends Component{
   
   
    render(){
        return(
            <div>
                
                {/* <ul style={{listStyleType:"none"}}> */}
                    
                    <p>"{this.props.review}"</p>
                    <p>- {this.props.name}</p>
                    
                
            </div>
        );  
    }
}