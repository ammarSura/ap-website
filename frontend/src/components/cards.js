import React, { Component } from "react";
import { CardGroup, Card,  } from "react-bootstrap";
import "../App.css";


export default class CardComp extends Component {
    render() {
      return (
        <div>
        <CardGroup style={{
            paddingTop: "7%", 
            paddingLeft: "10%", 
            paddingRight: "10%", 
            borderRadius: "200px"

        }}>
        <Card className="text-center">
            <Card.Img variant="top" src="https://res.cloudinary.com/dejzdjexf/image/upload/v1636493197/cards.js/model01_zuoi9i.jpg" />
            <Card.Body>
            <Card.Title>Men</Card.Title>
            </Card.Body>
        </Card>
        <Card className="text-center">
            <Card.Img variant="top" src="https://res.cloudinary.com/dejzdjexf/image/upload/v1636493177/cards.js/model01_rzkjqc.jpg" />
            <Card.Body>
            <Card.Title>Women</Card.Title>
            </Card.Body>
        </Card>
        <Card className="text-center">
            <Card.Img variant="top" src="https://res.cloudinary.com/dejzdjexf/image/upload/v1636493434/cards.js/model01_svdnwt.jpg" />
            <Card.Body>
            <Card.Title>Sale</Card.Title>
            </Card.Body>
        </Card>
        </CardGroup>
        </div>

      )
    } 
} 