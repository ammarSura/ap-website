import React, { Component, useState, useEffect } from "react";
import "../App.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from 'react-bootstrap';


export default function UserDetails() {

    const [ input_state, setInputState ] = useState(false);
    const [user_state, setUser] = useState(null);
    const [isLoaded, setLoading] = useState(false);
    const { user, isAuthenticated } = useAuth0();

    async function Check(details) {
   
    
        await fetch('/update/user-details', {
            
            method: 'POST',
            body: JSON.stringify({ email: user.email, first_name: details.first_name, last_name: details.last_name, gender: details.gender, birthday: details.birthday,}),
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

    function Butter1() {
        window.location.replace('/profile')
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
           {/* <ul style={{listStyleType:"none", lineHeight: "10%" ,lineWidth: "10%"}}>
                <li>First Name: <input type="text" disabled value={user_state.first_name} id="first_name"/></li>
                <li>Last Name: <input type="text" disabled value={user_state.last_name} id="last_name"/></li>
                <li>Gender: <input type="text" disabled value={user_state.gender} id="gender"/></li>
                <li>Birthday: <input type="text" disabled value={user_state.birthday} id="birthday"/></li>
                <li>Email: <input type="text" disabled value={user_state.email} id="email"/></li>
                {/* <li>Phone Number<input type="text" placeholder="State" id="state"/></li> */}
           {/* </ul> */}

           {/* <Button onClick={() => setInputState(true)}>Change Details</Button> */}

           <div style={{display: "flex", flexDirection: "column"}}>
                    <div style={{marginBottom: "1%"}}>First Name: <input type="text" disabled value={user_state.first_name} id="first_name"/></div>
                    <div style={{marginBottom: "1%"}}>Last Name: <input type="text" disabled value={user_state.last_name} id="last_name"/></div>
                    <div style={{marginBottom: "1%"}}>Birthday: <input type="text" disabled value={user_state.birthday} id="birthday"/></div>
                    {/* <div><input type="text" placeholder="Gender" id="gender"/></div> */}
                    <div style={{marginBottom: "1%"}}>Gender: <input type="text" disabled value={user_state.gender} id="gender"/>
                    </div>
                    <div style={{marginBottom: "1%"}}>Email: <input type="text" disabled value={user_state.email} id="email"/></div>
                    <div style={{marginBottom: "1%"}}><button onClick={() => setInputState(true)}>Change Details</button></div>
                {/* <div></div> */}
            </div>

            
            </div> 
            );
        } else {
            console.log('here')
            return (
                <div style={{marginLeft: "20%", marginRight: "20%", marginTop: "10%"}}>
                <h1>Your Details</h1>
               {/* <ul style={{listStyleType:"none", lineHeight: "10%" ,lineWidth: "10%"}}>
               <li>First Name: <input type="text" placeholder={user_state.first_name} id="first_name"/></li>
                <li>Last Name: <input type="text" placeholder={user_state.last_name} id="last_name"/></li>
                <li>Gender: <input type="text" placeholder={user_state.gender} id="gender"/></li>
                <li>Birthday: <input type="text" disabled placeholder={user_state.birthday} id="birthday"/></li>
                <li>Email: <input type="text" disabled placeholder={user_state.email} id="email"/></li>
                    {/* <li>Phone Number<input type="text" placeholder="State" id="state"/></li> */}
               {/* </ul> */}
               
               {/* <Button onClick={() =>Butter()}>Submit</Button>  */}

               <div style={{display: "flex", flexDirection: "column"}}>
                    <div style={{marginBottom: "1%"}}>First Name: <input type="text" value={user_state.first_name} id="first_name"/></div>
                    <div style={{marginBottom: "1%"}}>Last Name: <input type="text" value={user_state.last_name} id="last_name"/></div>
                    <div style={{marginBottom: "1%"}}>Birthday: <input type="text" disabled value={user_state.birthday} id="birthday"/></div>
                    {/* <div><input type="text" placeholder="Gender" id="gender"/></div> */}
                    <div style={{marginBottom: "1%"}}>Gender: <select placeholder="Gender" id="gender">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    </div>
                    <div style={{marginBottom: "1%"}}>Email: <input type="text" disabled value={user_state.email} id="email"/></div>
                    <div style={{marginBottom: "1%"}}><button onClick={() => Butter()}>Submit</button></div>
                    <div style={{marginBottom: "1%"}}><button onClick={() => Butter1()}>Back to your Profile</button></div>
                {/* <div></div> */}
            </div>
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

 