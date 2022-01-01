import React, { Component, useState, useEffect } from "react"; 
import {Container, Col, Row, Card} from 'react-bootstrap';
import "../App.css"

export default function Order(props) {

    // state = {
    //     order : null,
    //     isLoaded : false,
    // }

    const [ order, setOrder ] = useState(null);
    const [ isLoaded, setLoading ] = useState(false);



    useEffect(() => {

        if (!isLoaded) {
            
            fetch('/getProduct/' + props.id)
          .then(res => res.json())
          .then(result => {
            // this.setState({
            //   isLoaded: true,
            //   order: result
            // });
            setOrder(result[0]);
            setLoading(true);
            console.log('qwed',result, props.id)
          });
        }
        
    })
    function Butter() {
          
        window.location.replace('/product/'+ order.product_id); 
    
      }
    
   
    
        if (!isLoaded) {
            return <div>Loading ... </div>;
          } else {
            return(

                

                <Card style={{width : "20em", height : "38em"}} >
                    <Card.Img variant="top" src={order.image01} style = {{width:"15em", marginLeft: "auto", marginRight: "auto" ,marginTop:"10%"}}/>

                    <Card.Body style={{height:"80px", marginLeft:"15%"}}>
                        {order.name.length < 25 ?
                            <Card.Title onClick={() => Butter()} className="product-card-title" style={{cursor: "pointer"}}>{order.name}
                            </Card.Title>
                            :
                            <Card.Title onClick={() => Butter()} className="product-card-title" style={{cursor: "pointer"}}>{order.name.slice(0, 21) + '...'}
                            </Card.Title>}

                        <Card.Text className="product-card-text">
                            Price: {order.price}  
                        </Card.Text>
                        <Card.Text className="product-card-text">
                            Quantity: {props.quantity}  
                        </Card.Text>
                        
                        
                        <Card.Text className="product-card-text">
                            Size: {props.size}  
                        </Card.Text>
                        <Card.Text className="product-card-text">
                            Date purchased: {props.date}  
                        </Card.Text>
                        
              

              

            </Card.Body>
        </Card>
                
            );  
          }
        
    
}