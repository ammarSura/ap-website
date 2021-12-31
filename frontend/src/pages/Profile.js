import React, { Component, useState, useEffect } from "react";
import {Button} from "react-bootstrap";
import "../App.css";
import CarouselComp from "../components/carousel";
import CardComp from "../components/cards";
import CirclesComp from "../components/circles";
import Orders from "../components/orders";
import Addresses from "../components/addresses";
import AddressInput from "../components/address-input";
import {useNavigate} from 'react-router-dom';
import RouteChange from '../components/route-button-change';
import { useAuth0 } from "@auth0/auth0-react";
import Greeter from "../components/greeter";



export default function Profile() {

   
    const { user, isAuthenticated } = useAuth0();
    const [user_state, setUser] = useState(null);
    const [isLoaded, setLoading] = useState(false);
    // console.log('user', user);
    

    useEffect( () =>  {
      if (isAuthenticated && isLoaded===false) {
        console.log('prof-user', user.name)
        fetch('/getUser/' + user.email)
          .then(res => res.json())
          .then(result => {
            setUser(result[0]);
            setLoading(true);
          });
      }     
    });

  
    if (isLoaded===false) {
        return <div>Loading ... </div>;
      } else {

        return (
            // <div style={{marginBottom: "5%", marginTop: "10%", marginLeft: "20%", marginRight: "20%"}}>
                <div style={{display: "grid", gridTemplateColumns: "50% 50%", marginBottom: "5%", marginTop: "15%", marginLeft: "20%"}}>
                
                <div>
                  <Orders orders={user_state.orders}/>
                  <Addresses addresses={user_state.addresses}/> 
                  
                </div>
                <div>
                  <Greeter user_db={user_state}/>
                  <AddressInput/>
                </div>
                
                
                </div>
                

            // </div>
          );
    }
    
  
}

 