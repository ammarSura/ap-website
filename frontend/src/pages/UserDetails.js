import React, { Component, useState, useEffect } from "react";
import "../App.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from 'react-bootstrap';

export default function UserDetails() {

    const { user, isAuthenticated } = useAuth0();
    const [ input_state, setInputState ] = useState(false);
    const [user_state, setUser] = useState(null);
    const [isLoaded, setLoading] = useState(false);

    async function Check(details) {
   
    
        await fetch('/update/user-details', {
            
            method: 'POST',
            body: JSON.stringify({ email: 'ammarsura@gmail.com', first_name: details.first_name, last_name: details.last_name, gender: details.gender, birthday: details.birthday,}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        setUser(details);
        setInputState(false);
        
    
    }

    function Butter() {
        const add = {
            first_name : document.getElementById("first_name").value,
            last_name : document.getElementById("last_name").value,
            gender : document.getElementById("gender").value,
            birthday : document.getElementById("birthday").value,
            email : document.getElementById("email").value,
            
        }
        console.log(add);
        Check(add);
        
    }
    
    

    useEffect( () =>  {
      if (isAuthenticated && isLoaded===false) {
        fetch('/getUser/' + user.email)
          .then(res => res.json())
          .then(result => {
            setUser(result[0]);
            setLoading(true);
          });
      }     
    });

    if (isLoaded===true) {
        
        console.log(user_state, input_state);

        if (input_state===false){
            return (
            <div style={{marginLeft: "20%", marginRight: "20%", marginTop: "10%"}}>
            <h1>Your Details</h1>
           <ul style={{listStyleType:"none", lineHeight: "10%" ,lineWidth: "10%"}}>
                <li>First Name: <input type="text" disabled value={user_state.first_name} id="first_name"/></li>
                <li>Last Name: <input type="text" disabled value={user_state.last_name} id="last_name"/></li>
                <li>Gender: <input type="text" disabled value={user_state.gender} id="gender"/></li>
                <li>Birthday: <input type="text" disabled value={user_state.birthday} id="birthday"/></li>
                <li>Email: <input type="text" disabled value={user_state.email} id="email"/></li>
                {/* <li>Phone Number<input type="text" placeholder="State" id="state"/></li> */}
           </ul>
           <Button onClick={() => setInputState(true)}>Change Details</Button>

            
            </div> 
            );
        } else {
            console.log('here')
            return (
                <div style={{marginLeft: "20%", marginRight: "20%", marginTop: "10%"}}>
                <h1>Your Details</h1>
               <ul style={{listStyleType:"none", lineHeight: "10%" ,lineWidth: "10%"}}>
               <li>First Name: <input type="text" placeholder={user_state.first_name} id="first_name"/></li>
                <li>Last Name: <input type="text" placeholder={user_state.last_name} id="last_name"/></li>
                <li>Gender: <input type="text" placeholder={user_state.gender} id="gender"/></li>
                <li>Birthday: <input type="text" disabled placeholder={user_state.birthday} id="birthday"/></li>
                <li>Email: <input type="text" disabled placeholder={user_state.email} id="email"/></li>
                    {/* <li>Phone Number<input type="text" placeholder="State" id="state"/></li> */}
               </ul>
               
               <Button onClick={() =>Butter()}>Submit</Button>
                </div> 
            );
        }

    } else {
        return (
            <div>
                <h3>Loading...</h3>
            </div>
        )
    }
}

 