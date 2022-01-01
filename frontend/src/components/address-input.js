import React, { Component, useState } from "react"; 
import {Form, Button} from 'react-bootstrap';
import "../App.css";

import { useAuth0 } from "@auth0/auth0-react";





export default function AddressInput() {


    // state = {
    //     isLoaded: false,
    //     add: null,
    // }

    const [ isLoaded, setIsLoaded ] = useState(false);
    const [ address, setAddress ] = useState(null);
    const { user, isAuthenticated } = useAuth0();
    console.log('user1', user);

    async function Check(address) {
   
    
        await fetch('/update/address', {
            
            method: 'POST',
            body: JSON.stringify({ email: user.email, name: address.name, line1: address.line1, line2: address.line2, pincode: address.pincode, city: address.city, state: address.state, country: address.country }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    
        window.location.reload();
    
    }


    function Butter() {
        
    
        const address = {
            name : document.getElementById("name").value,
            line1 : document.getElementById("line1").value,
            line2 : document.getElementById("line2").value,
            pincode : document.getElementById("pincode").value,
            city : document.getElementById("city").value,
            state : document.getElementById("state").value,
            country : document.getElementById("country").value,
        }

        console.log(address)
        Check(address);

        document.getElementById("name").value = ' ';
        document.getElementById("line1").value = ' ';
        document.getElementById("line2").value = ' ';
        document.getElementById("city").value = ' ';
        document.getElementById("pincode").value = ' ';
        document.getElementById("state").value = ' ';
        document.getElementById("country").value = ' ';
        
    }
   
    
    return(
        <div >
        <h3>Add Address</h3>
        {/* <ul style={{listStyleType:"none", lineHeight: "10%" ,lineWidth: "10%"}}>
            <li><input type="text" placeholder="Add address name" id="name"/></li>
            <li><input type="text" placeholder="Line 1" id="line1"/></li>
            <li><input type="text" placeholder="Line 2" id="line2"/></li>
            <li><input type="text" placeholder="Country" id="country"/></li>
            <li><input type="text" placeholder="State" id="state"/></li>
            <li><input type="text" placeholder="City" id="city"/></li>
            <li><input type="text" placeholder="Pincode" id="pincode"/></li>
            
        </ul> */}

        <div style={{display: "flex", flexDirection: "column"}}>
                    <div style={{marginBottom: "1%"}}>
                        <input type="text" placeholder="Add address name" id="name"/>
                    </div>
                    <div style={{marginBottom: "1%"}}>
                        <input type="text" placeholder="Line 1" id="line1"/>
                    </div>
                    <div style={{marginBottom: "1%"}}>
                        <input type="text" placeholder="Line 2" id="line2"/>
                    </div>
                    <div style={{marginBottom: "1%"}}>
                        <input type="text" placeholder="Country" id="country"/>
                    </div>
                    <div style={{marginBottom: "1%"}}>
                        <input type="text" placeholder="State" id="state"/>
                    </div>
                    <div style={{marginBottom: "1%"}}>
                        <input type="text" placeholder="City" id="city"/>   
                    </div>
                    <div style={{marginBottom: "1%"}}>
                        <input type="text" placeholder="Pincode" id="pincode"/>
                    </div>
                </div>
                
        

        <button onClick={() => Butter()}>Add Address</button>

        
        </div>
    );  
    
}