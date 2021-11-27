import React, { Component } from "react"; 
import {Container, Col, Row} from 'react-bootstrap';
import "../App.css"

export default class Order extends Component{

    state = {
        order : null,
        isLoaded : false,
    }

    componentDidMount() {
        fetch('/getProduct/' + this.props.id)
          .then(res => res.json())
          .then(result => {
            this.setState({
              isLoaded: true,
              order: result
            });
          });
    }
    
   
    render() {
        if (!this.state.isLoaded) {
            return <div>Loading ... </div>;
          } else {
            return(

                <Container fluid>
                    <Row style={{marginBottom: "10%"}}>
                        <Col xs={6}>
                            <img src={this.state.order[0].image01} width="60%"/>
                        </Col>
                        <Col xs={5}>
                            <Row ><h3>{this.state.order[0].name}</h3></Row>
                            {/* <Row>Description: {this.props.description}</Row> */}
                            <Row><p>Price: {this.state.order[0].price}</p></Row>
                            <Row><p>Date: {this.state.order[0].date}</p></Row>
                    
                        </Col>
                    </Row>
                    
                </Container>
            );  
          }
        
    }
}