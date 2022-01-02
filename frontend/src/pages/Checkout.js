import React, { Component, useState, useEffect, useContext } from "react";
import "../App.css";
import Addresses from '../components/addresses';
import AddressInput from '../components/address-input';
import { useAuth0 } from "@auth0/auth0-react";
import { CartContext } from '../contexts/cart-context';




export default function Checkout() {
    const [user_state, setUser] = useState(null);
    const [ isLoaded, setLoading ]= useState(false)
    const carter = useContext( CartContext );
    const [ cart, setCart ] = useState(null);
    const [ cartIsLoaded, setCartLoading ] = useState(false);
    const { user, isAuthenticated } = useAuth0();
    // const [ address, setAddress ] = useState(null);

    function looper() {

        const adds = user_state.addresses.map( (address) => 
        <div style={{marginLeft:"10%"}}>
                
            <ul style={{listStyleType:"none"}}>
                <li><input type="radio" id={address.name} value={address.name} name="address"/></li>
                <li>Name: {address.name}</li>
                <li>Line 1: {address.line1}</li>
                <li>Line 2: {address.line2}</li>
                <li>City: {address.city}</li>
                <li>Pincode: {address.pincode}</li>
                <li>State: {address.state}</li>
            </ul>
        </div>)

        return adds;
    }

    async function Check(item, address, phone) {
   
        console.log(item)
        await fetch('/submitOrder', {
            
            method: 'POST',
            body: JSON.stringify({email: user.email, product_id: item.product_id, quantity: item.quantity, size: item.size, address: address, phone: phone, price: item.price}),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        await fetch('/emptyCart', {
            
            method: 'POST',
            body: JSON.stringify({email: user.email}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    
        window.location.replace('/');
    
    }




    function payer() {
        let address = null;
        let phone = null;
        // let mail = null;
        for (let i = 0; i < user_state.addresses.length; i++) {
            if (document.getElementById(user_state.addresses[i].name).checked) {
                address = (user_state.addresses[i]);
            }  
        }

        phone = document.getElementById("phone").value;
        // mail = document.getElementById("email").value;

        console.log(address, phone, cart)

        for (let i = 0; i < cart.length; i++) {
            Check(cart[i], address, phone);
            
        }
    }

        
    
    useEffect( () => {
        if ( !isLoaded && isAuthenticated ) {
            console.log('prof-user', user.name)
            fetch('/getUser/' + user.email)
              .then(res => res.json())
              .then(result => {
                setUser(result[0]);
                setLoading(true);
              });
        }
        
        if ( !cartIsLoaded && isAuthenticated ) {
            setCart(carter.cart.cart);
            
            setCartLoading(true); 
        }
    });

    if (isLoaded) {
        console.log(user_state.addresses)
        return (
            <div style={{marginTop: "20%"}}>
            <div style={{display: "grid", gridTemplateColumns: "50% 50%"}}>
                <div>
                    <h3>Select an Address</h3>
                        {user_state.addresses.length > 0

                            ? <div>
                                {looper()} 
                                {/* <button onClick={() => confirmer()}>Confirm Address</button> */}
                            </div>
                            : <p>You have no saved addresses</p> 
                        }
                </div>
                
                
                <div>
                    <AddressInput/>
                </div>
                
            </div>
                <div>
                    <h3>Contact Details</h3>
                    {/* <div style={{display: "grid", gridTemplateColumns: "30% 30%"}}> */}
                    <div>Phone Number: <input type="text" id="phone"/></div>
                        {/* <div>Delivery Email: <input type="text" id="email"/></div> */}
                    {/* </div> */}
                </div>
                <div>
                    {/* <h3>t</h3> */}
                    <button onClick={() => payer()}>Redirect to payment portal</button>
                </div>
            </div>

            
            
        );
    } else {
        return null
    }
   
  

    
    


}

 