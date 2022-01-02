import React, { Component } from "react";
import "../App.css";
import CarouselComp from "../components/carousel";
import SignUpCarouselComp from "../components/sign-up-carousel";
import CardComp from "../components/cards";
import CirclesComp from "../components/circles";
import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from "../components/login-button";



export default function Home() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log('aasadadfas' )
  // console.log('user', user)
  if (isLoading) {
    return(
      <div>Loading...</div>
    );
  } else {

  
  if (isAuthenticated) {
    return (
      <div style={{marginBottom: "5%", marginTop: "10%"}}>
          <CarouselComp/>
          <div>
          <div style={{ 
            marginLeft:"10%", 
            marginTop:"5%",
            marginRight:"10%"
          }}>
          <h1 style={{
            textAlign:"center", 
            marginBottom: "2%",
          }}> FEATURED </h1>
            <CirclesComp/>
          </div>
          </div>
          <div>
            <CardComp />
          </div>

       
      </div>
    );
  } else {
    
    return (
      <div style={{marginBottom: "5%"}}>
         <div style={{display: "flex", flexDirection: "column", marginLeft: "20%", marginRight: "20%", marginTop: "1%"}}>
           <img src="https://res.cloudinary.com/dejzdjexf/image/upload/v1636476029/esa_logo_xtnzpj.png" style={{width:"15%"}}></img>
         <div style={{marginTop: "1%", marginBottom: "2.5%"}}>
            <SignUpCarouselComp/>
          </div> 
          <div style={{marginTop: "1%", marginBottom: "1%"}}>
            <h1>Sign in to shop!</h1>
          </div>  
          <div style={{marginTop: "1%", marginBottom: "2.5%"}}> 
            <LoginButton/>
          </div>     
            
        </div>
         
       
        
            
      </div>
    );
  }
}

}

 