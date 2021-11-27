import React, { Component, useEffect, useState } from "react";
import "../App.css";
import {Link} from 'react-router-dom';
import {Container, Row, Col, Image, Button, DropdownButton, Dropdown, List, ListGroup} from "react-bootstrap"
import Reviews from "../components/reviews";

const prod_id = window.location.href.slice(30);
// console.log(prod_id);



async function Check1() {
   
    
  await fetch('/addToWishlist', {
      
      method: 'POST',
      body: JSON.stringify({ email: 'ammarsura@gmail.com', product_id: prod_id}),
      headers: {
          'Content-Type': 'application/json'
      }
  })


}

export default function Product() {


    const [product, setProduct] = useState(null);
    const [wishString, setAddedToWishlist] = useState("Add to Wishlist");
    const [isLoaded, setLoading] = useState(false);

    function wisher() {
      Check1();
    
      setAddedToWishlist("Added to Wishlist");
    }

    useEffect(() =>  {
        fetch('/getProduct/' + prod_id)
          .then(res => res.json())
          .then(result => {
            // this.setState({
            //   isLoaded: true,
            //   product: result[0],
              
            // });
            setProduct(result[0]);
            setLoading(true);
          });
    });
    

    if (isLoaded === false) {
        return <div>Loading ... </div>;
      } else {
        return (
            // <h1 style={{marginTop:"200px"}}>{this.state.product.reviews[0].name}</h1>
            <div> 
      
            <Container fluid style={{
              marginTop: "14%", 
              marginLeft: "3%" 
            }}> 
      
            <Row>
      
                <Col sm={4}>
                  <Image src={product.image01} height="700px"/>
                </Col>
                <Col sm={4}>
                  <Image src={product.image01} height="700px"/>
                </Col>
      
                <Col sm={3}>
      
      
                  <div style={{
                    marginLeft: "7%", 
                  }}>
                  
                  <h1>{product.name}</h1>
      
                  <h3> {product.price} </h3>
      
                <p>{product.description}</p>
                
                    <div> 
      
                      <Dropdown style={{
                        marginTop: "5%", 
                        marginBottom: "5%"
                      }}>
                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="light">
                          Select Size
                        </Dropdown.Toggle>
      
                        <Dropdown.Menu variant="light">
                          <Dropdown.Item href="#/xs"> XS </Dropdown.Item>
                          <Dropdown.Item href="#/s"> S </Dropdown.Item>
                          <Dropdown.Item href="#/m"> M </Dropdown.Item>
                          <Dropdown.Item href="#/l"> L </Dropdown.Item>
                          <Dropdown.Item href="#/xl"> XL </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
      
                      <div className="d-grid gap-2">
                      <Button variant="secondary" size="lg">
                      Add to Cart
                      </Button>
                      <Button variant="secondary" size="lg" onClick={() => wisher()}>
                      {wishString}
                      {/* Add to Wishlist */}
                      </Button>
                      </div>
      
                      <h3 style={{
                        marginTop:"12%"
                      }}> Reviews </h3>
      
                      <div>
                        <Reviews reviews={product.reviews}/>
                        {/* <h1>{this.state.product.reviews}</h1> */}
                      </div>
      
      
                      <form>
                      <div className="form-group" style={{
                          marginTop: "5%"
                      }}>
                      <label>Review this product:</label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                      </div>
                      </form>
      
      
                    </div>
      
                  </div>
      
                </Col>
      
            </Row>
      
            </Container>
      
            </div> 
          );
      }
    
}
