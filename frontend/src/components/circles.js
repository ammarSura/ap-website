import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import { InputGroup, FormControl } from "react-bootstrap";  
import { Col, Image, Row} from "react-bootstrap"; 
import "../App.css";


export default function CirclesComp() {
      return (
        <Container>
            <Row>
                <Col xs={1} md={2}>
                    <Image src="https://res.cloudinary.com/dejzdjexf/image/upload/v1636723718/circles.js%20resized%20products/main_pqswdj_mty03n.jpg" roundedCircle height="150px"/>
                    <div style={{
                        marginTop:"10px", 
                        marginLeft:"50px"
                    }}> Jacket </div>
                </Col>
                <Col xs={1} md={2}>
                    <Image src="https://res.cloudinary.com/dejzdjexf/image/upload/v1636723720/circles.js%20resized%20products/main_aemrmk_qhtf8t.jpg" roundedCircle height="150px"/>
                    <div style={{
                        marginTop:"10px", 
                        marginLeft:"50px"
                    }}> Jacket </div>
                </Col>
                <Col xs={1} md={2}>
                    <Image src="https://res.cloudinary.com/dejzdjexf/image/upload/v1636724051/circles.js%20resized%20products/main_axrijp_vtqxiz.jpg" roundedCircle height="150px"/>
                    <div style={{
                        marginTop:"10px", 
                        marginLeft:"50px"
                    }}> Jacket </div>
                </Col>
                <Col xs={1} md={2}>
                    <Image src="https://res.cloudinary.com/dejzdjexf/image/upload/v1636724051/circles.js%20resized%20products/main_dchbj2_okgwo4.jpg" roundedCircle height="150px"/>
                    <div style={{
                        marginTop:"10px", 
                        marginLeft:"50px"
                    }}> Jacket </div>
                </Col>
                <Col xs={1} md={2}>
                    <Image src="https://res.cloudinary.com/dejzdjexf/image/upload/v1636724051/circles.js%20resized%20products/main_izlacx_arsitm.jpg" roundedCircle height="150px"/>
                    <div style={{
                        marginTop:"10px", 
                        marginLeft:"50px"
                    }}> Jacket </div>
                </Col>
                <Col xs={1} md={2}>
                    <Image src="https://res.cloudinary.com/dejzdjexf/image/upload/v1636723718/circles.js%20resized%20products/main_pqswdj_mty03n.jpg" roundedCircle height="150px"/>
                    <div style={{
                        marginTop:"10px", 
                        marginLeft:"50px"
                    }}> Jacket </div>
                </Col>
            </Row>
        </Container>
      ); 
    
}