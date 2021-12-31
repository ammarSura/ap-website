import React, { Component } from "react"; 
import "../App.css"
import Order from "./order";

export default function Orders(props){

    // componentDidMount() {
    //     fetch('/getProduct/' + this.props.id)
    //       .then(res => res.json())
    //       .then(result => {
    //         this.setState({
    //           isLoaded: true,
    //           user: result
    //         });
    //       });
    // }
    
    
    function looper() {

        const orders = props.orders.map( (order) => 
        <Order key = {order._id} id = {order._id} date = {order.date} />)

        return orders;
    }

    if (props.orders.length > 0) {
        return(
            <div style={{marginRight: "30%"}}>
                <h2>Your Orders</h2>
                <br/>
                {looper()}
            </div>
        );  
    } else {
        return(
            <div style={{marginRight: "30%"}}>
                <h2>Your Orders</h2>
                <br/>
                <p>None, yet</p>
            </div>
        );  
    }
    
    
}