import React, { Component } from "react"; 
import "../App.css"
import Order from "./order";

export default class Orders extends Component{

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
    
    
    looper() {

        const orders = this.props.orders.map( (order) => 
        <Order key = {order._id} id = {order._id} date = {order.date} />)

        return orders;
    }

    render(){
        return(
            <div style={{marginRight: "30%"}}>
                <h2>Your Orders</h2>
                <br/>
                {this.looper()}
            </div>
        );  
    }
}