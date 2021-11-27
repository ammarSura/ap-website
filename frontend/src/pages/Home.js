import React, { Component } from "react";
import "../App.css";
import CarouselComp from "../components/carousel";
import CardComp from "../components/cards";
import CirclesComp from "../components/circles";


export default function Home() {



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
}

 