import React, { Component } from "react"; 
import "../App.css"
import Order from "./order";

export default function Orders(props){

    
    
    
    function looper() {

        const orders = props.orders.map( (order) => 
        <Order key = {order._id} id = {order.product_id} date = {order.date} quantity = {order.quantity} size={order.size} phone={order.phone} address={order.address} />)

        return orders;
    }

    if (props.orders.length > 0) {
        return(
            <div style={{marginRight: "30%", height: "40em", width: "20em", overflowY: "auto" ,marginBottom: "5%"}}>
                <h2>Your Orders</h2>
                <br/>
                <div style={{height: "30em", width: "20em", overflowY: "auto"}}>
                {looper()}
                </div>
                
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