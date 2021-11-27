import React, { Component } from "react"; 
import "../App.css"
import Address from "./address";

export default class Addresses extends Component{
    looper() {

        const adds = this.props.addresses.map( (address) => 
        <Address key = {address.name} name = {address.name} line1 = {address.line1} line2 = {address.line2} city = {address.city} pincode = {address.pincode} state = {address.state} />)

        return adds;
    }
    render(){
        return(
            <div>
                <h2>Your Addresses</h2>
                <br/>
                {this.looper()}
            </div>
        );  
    }
}