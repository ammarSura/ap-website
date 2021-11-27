import React, { Component, useState, useEffect } from "react";
import "../App.css";
import { useAuth0 } from "@auth0/auth0-react";

export default function UserDetails() {

    const { user, isAuthenticated } = useAuth0();
    const [user_state, setUser] = useState(null);
    const [isLoaded, setLoading] = useState(false);
    

    useEffect( () =>  {
      if (isAuthenticated && isLoaded===false) {
        // console.log(user)
        fetch('/getUser/' + user.email)
          .then(res => res.json())
          .then(result => {
            setUser(result[0]);
            setLoading(true);
          });
      }     
    });

    if (isLoaded===true) {
        return (
            <div style={{marginTop: "10%"}}>
            <ul>
                <li>Name: {user_state.first_name + ' ' + user_state.last_name}</li>
                <li>Birthday: {user_state.birthday}</li>
                <li>Gender: {user_state.gender}</li>
                {/* <li></li>
                <li></li> */}
            </ul>
            </div>
        )
    } else {
        return (
            <div>
                <h3>Loading...</h3>
            </div>
        )
    }
}

 