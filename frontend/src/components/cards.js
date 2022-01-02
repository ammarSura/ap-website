import React, { Component } from "react";
import { CardGroup, Card,  } from "react-bootstrap";
import "../App.css";


export default function CardComp() {
      return (
        <div>
        <CardGroup style={{
            paddingTop: "7%", 
            paddingLeft: "10%", 
            paddingRight: "10%", 
            borderRadius: "200px"

        }}>
        
        <Card className="text-center">
            <a href="/men"><Card.Img variant="top" src="https://res.cloudinary.com/dejzdjexf/image/upload/v1636493197/cards.js/model01_zuoi9i.jpg" /></a>
            <Card.Body>
            <Card.Title><a href="/men">Men</a></Card.Title>
            </Card.Body>
        </Card>
        
        <Card className="text-center">
        <a href="/women"><Card.Img variant="top" src="https://res.cloudinary.com/dejzdjexf/image/upload/v1636493177/cards.js/model01_rzkjqc.jpg" /></a>
            <Card.Body>
            <Card.Title><a href="/women">Women</a></Card.Title>
            </Card.Body>
        </Card>
        <Card className="text-center">
        <a href="/men"><Card.Img variant="top" src="https://res.cloudinary.com/dejzdjexf/image/upload/v1636493434/cards.js/model01_svdnwt.jpg" /></a>
            <Card.Body>
            <Card.Title><a href="/men">Sale</a></Card.Title>
            </Card.Body>
        </Card>
        </CardGroup>
        </div>

      );
     
} 