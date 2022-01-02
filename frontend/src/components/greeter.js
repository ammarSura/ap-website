import React, { Component, useState, useEffect } from "react"; 
import { Link } from "react-router-dom";
import {Container, Col, Row} from 'react-bootstrap';
import "../App.css";
import { useAuth0 } from "@auth0/auth0-react";


async function Check1(user) {
   
    
    await fetch('/update/details', {
        
        method: 'POST',
        body: JSON.stringify( { 
            email: user.email, 
            first_name: user.first_name, 
            last_name: user.last_name, 
            birthday: user.birthday, 
            gender: user.gender }
        ),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    window.location.reload();

}

async function Check2(user) {
   
    
    await fetch('/update/details', {
        
        method: 'POST',
        body: JSON.stringify({ email: user.email, birthday: user.birthday, gender: user.gender }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    window.location.reload();

}

export default function Greeter(props) {
    

    const { user, isAuthenticated } = useAuth0();
    const [user_state, setUser] = useState(props.user_db);
    const [email, setEmail] = useState(null);
    const [emailLoaded, setLoaded] = useState(false);
   
    const [isLoaded, setLoading] = useState(false);

    // function redirecter() {
    //     window.
    // }

    

    useEffect( () =>  {
        if(isLoaded === true) {
            Check1(user_state);
        }  
    });


    async function Butter1() {
       

        const details = {
            first_name : document.getElementById("firstname").value,
            last_name : document.getElementById("lastname").value,
            birthday : document.getElementById("birthday").value,
            gender : document.getElementById("gender").value,
            email : props.user_db.email,
        }
        setUser(details);

        setLoading(true);

        document.getElementById("firstname").value = '';
        document.getElementById("lastname").value = '';
        document.getElementById("birthday").value = '';
        document.getElementById("gender").value = '';

        console.log(details);
    }

    function Butter2() {
        const details = {
            birthday : document.getElementById("birthday").value,
            gender : document.getElementById("gender").value,
            email : props.user_db.email,
        }

        setUser(details);
        console.log(details);
        setLoading(true);

       
        document.getElementById("birthday").value = '';
        document.getElementById("gender").value = '';
    }

    if (user_state.first_name === '') {
        return (
            <div>
                {/* <Row>
                    <Col>
                        
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Row>
                            First Name:
                        </Row>
                    
                    </Col>

                    <Col>
                        <Row>
                            <input type="text" placeholder="First Name" id="firstname"/>
                        </Row>
                    
                    </Col>
                </Row>
                 */}
                
                <div style={{display: "flex", flexDirection: "column"}}>
                <h2>Tell us about yourself</h2>
                    <div style={{marginBottom: "1%"}}>
                        First Name: <input type="text" placeholder="First Name" id="firstname"/>
                    </div>
                    <div style={{marginBottom: "1%"}}>
                        Last Name: <input type="text" placeholder="Last Name" id="lastname"/>
                    </div>
                    <div style={{marginBottom: "1%"}}>
                        Birthday: <input type="date" id="birthday" placeholder="Birthday"/>
                    </div>
                    <div style={{marginBottom: "1%"}}>
                        Gender: <select placeholder="Gender" id="gender">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div style={{marginBottom: "1%"}}>
                        <button onClick={() => Butter1()}>Submit</button>
                    </div>
                </div>
                

                
            </div>
            
        );
    } if (user_state.gender == ''){
        
            return(
                <div>
                    <h2>Tell us about yourself</h2>
                    
                    {/* <ul style={{listStyleType:"none", lineHeight: "10%" ,lineWidth: "10%"}}> */}

                    
                    
                    <div style={{marginBottom: "1%"}}>
                        Birthday: <input type="date" id="birthday" placeholder="Birthday"/>
                    </div>
                    <div style={{marginBottom: "1%"}}>
                        Gender: <select placeholder="Gender" id="gender">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div style={{marginBottom: "1%"}}>
                        <button onClick={() => Butter2()}>Submit</button>
                    </div>
                </div>
            );
    }  

    return(
        <div>
            <h3> Hi, {props.user_db.first_name} </h3>
            <Link to="/user-details"><button>View Your Details</button></Link>
        </div>
        );
            
        
        
        


    
    
   
    
}