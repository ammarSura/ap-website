import React, { Component, useState } from "react"; 
import {Form, Button} from 'react-bootstrap';
import "../App.css";

import { useAuth0 } from "@auth0/auth0-react";

// async function Adder() {
   
    
//     await fetch('/addAddress', {
        
//         method: 'POST',
//         body: JSON.stringify({ name: user.name, age: user.age, email: user.email }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })

// }

async function Check(address) {
   
    
    await fetch('/update/address', {
        
        method: 'POST',
        body: JSON.stringify({ email: 'ammarsura@gmail.com', name: address.name, line1: address.line1, line2: address.line2, pincode: address.pincode, city: address.city, state: address.state, country: address.country }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    window.location.reload();

}

export default class AddressInput extends Component{


    state = {
        isLoaded: false,
        add: null,
    }

    Butter() {
        
    
        const add = {
            name : document.getElementById("name").value,
            line1 : document.getElementById("line1").value,
            line2 : document.getElementById("line2").value,
            pincode : document.getElementById("pincode").value,
            city : document.getElementById("city").value,
            state : document.getElementById("state").value,
            country : document.getElementById("country").value,
        }

        console.log(add)
        Check(add);

        document.getElementById("name").value = ' ';
        document.getElementById("line1").value = ' ';
        document.getElementById("line2").value = ' ';
        document.getElementById("city").value = ' ';
        document.getElementById("pincode").value = ' ';
        document.getElementById("state").value = ' ';
        document.getElementById("country").value = ' ';
        
    }
   
    render(){
        return(
            <div style={{marginLeft: "20%", marginRight: "20%", marginTop: "10%"}}>
            <h1>Add Address</h1>
           <ul style={{listStyleType:"none", lineHeight: "10%" ,lineWidth: "10%"}}>
                <li><input type="text" placeholder="Add address name" id="name"/></li>
                <li><input type="text" placeholder="Line 1" id="line1"/></li>
                <li><input type="text" placeholder="Line 2" id="line2"/></li>
                <li><input type="text" placeholder="City" id="city"/></li>
                <li><input type="text" placeholder="Pincode" id="pincode"/></li>
                <li><input type="text" placeholder="State" id="state"/></li>
                <li><input type="text" placeholder="Country" id="country"/></li>
           </ul>
           

            <button onClick={() => this.Butter()}>Add Adress</button>

            
            </div>
        );  
    }
}