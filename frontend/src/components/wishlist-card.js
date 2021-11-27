import React, { Component } from "react";
import {Link} from "react-router-dom";
import { Card} from "react-bootstrap";
import "../App.css";


export default class WishlistCardComp extends Component {
    state = {
      link : '/product/' + this.props.id,
      product: null
    } 

    componentDidMount() {
      fetch('/getProduct/' + this.props.id)
        .then(res => res.json())
        .then(result => {
          this.setState({
            isLoaded: true,
            product: result[0]
          });
        });
      
  }

    Butter() {
        
      window.location.replace('/product/'+ this.props.id); 
  }

    render() {
      if (!this.state.isLoaded) {
        return <div><h3>Loading ...</h3> </div>;
      } else {
          return (
            // <h1 style={{marginTop: "200px"}}>{this.state.product.name}</h1>
            <Card style={{width : "20em"}} >
                <Card.Img variant="top" src={this.state.product.image01} style = {{width:"15em", marginLeft: "auto", marginRight: "auto" , marginTop:"10%"}}/>
                <Card.Body style={{height:"80px", marginLeft:"15%"}}>
                <Card.Title onClick={() => this.Butter()} className="product-card-title" style={{cursor: "pointer"}}>{this.state.product.name}</Card.Title>
                <Card.Text className="product-card-text">
                    {this.state.product.price}
                </Card.Text>
                </Card.Body>
            </Card>
          )
      
      
    } 

  }

}
