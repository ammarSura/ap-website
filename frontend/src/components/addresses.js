import React, { Component } from "react"; 
import "../App.css"
import Address from "./address";

export default function Addresses(props){
    function looper() {

        const adds = props.addresses.map( (address) => 
        <Address key = {address.name} name = {address.name} line1 = {address.line1} line2 = {address.line2} city = {address.city} pincode = {address.pincode} state = {address.state} />)

        return adds;
    }
    if (props.addresses.length > 0) {
        console.log('yes')
        return(
            <div>
                <h2>Your Addresses</h2>
                <br/>
                <div>
                    {looper()}    
                </div>
            </div>
        );  
    } else {
        return (
        <div>
            <h2>Your Addresses</h2>
            <br/>
            <p>None, yet</p>
        </div>
        );
    }
}