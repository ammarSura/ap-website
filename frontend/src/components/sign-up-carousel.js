import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "../App.css";

export default function SignUpCarouselComp() {
      return (
        
    
        <Carousel variant="light" 
        style=
        {{
            backgroundColor: "#fff",
            height: "100%",
            width: "100%",
            
        }}>
        <Carousel.Item>
            <img
            className="d-block w-1"
            src="https://res.cloudinary.com/dejzdjexf/image/upload/v1636728822/carousel%20sample/carousel-2_hy77k9.jpg"
            alt="First slide"
            width="100%"
            // height="1%"
            />
            <Carousel.Caption>
            <h1>First slide label</h1>
            <p>Lorem ipsum dolor si amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
            <img
            className="d-block w-1"
            src="https://res.cloudinary.com/dejzdjexf/image/upload/c_crop,h_780,w_1280,x_164,y_400/v1636729158/carousel%20sample/ScreenShot20180823at10.25.37AM_chptcd.png"
            alt="Second slide"
            width="100%"
            // height="1%"
            />

            <Carousel.Caption>
            <h1>Second slide label</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
            <img
            className="d-block w-1"
            src="https://res.cloudinary.com/dejzdjexf/image/upload/a_hflip,c_crop,h_720,w_1280,x_371,y_191/a_0/v1636729160/carousel%20sample/736da858437249.59fc1bda8c364_m2dbeo.jpg"
            alt="Third slide"
            width="100%"
            // heigh="1%"
            />

            <Carousel.Caption>
            <h1>Third slide label</h1>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
            
      );
    
  }