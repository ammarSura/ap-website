// import React, { Component, useState, useEffect } from "react";
// import {Link} from "react-router-dom";
// import { Card} from "react-bootstrap";
// import "../App.css";

import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Button} from "react-bootstrap";
import "../App.css";
import ProductCardCounterComp from './product-card-counter';
import WishlistRemove from './wishlist-remove';
import { useAuth0 } from "@auth0/auth0-react";
import ProductCardWishlistComp from "./product-card-wishlist";
import RatingComp from "./rating";



// export default class ProductCardComp extends Component {
export default function WishlistCardComp (props) {
    
    const [ link, setLink ] = useState(null);
    const [ wishRemoved, setWishRemoved ] = useState(false);
    const [ product, setProduct ] = useState(null);
    const [ isLoaded, setLoading ] = useState(false);
    const { user, isAuthenticated, isLoading } = useAuth0();

    useEffect(() => {
      if ( isLoaded === false) {
        setLink(props.id);

        fetch('/getProduct/' + props.id)
        .then(res => res.json())
        .then(result => {
          
          setProduct(result[0]);
          setLoading(true);
          
          
        });

      }
    });

    async function removeFromWishlist(product_id) {
      await fetch('/removeFromWishlist', {
          
          method: 'POST',
          body: JSON.stringify(
              { 
                  email: user.email ,
                  product_id: props.id,
                  
              }),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      window.location.reload();   
  }

    function Butter() {
          
      window.location.replace('/product/'+ props.id); 
  
    }

    if (isLoaded === true) {
      console.log(product)
      return (
       
        <Card style={{width : "20em", height : "38em"}} >
            <Card.Img variant="top" src={product.image01} style = {{width:"15em", marginLeft: "auto", marginRight: "auto" ,marginTop:"10%"}}/>

            <Card.Body style={{height:"80px", marginLeft:"15%"}}>
            <ProductCardWishlistComp style={{marginBottom: "100px"}}id={props.id} wishlist={props.wishlist}/>
              {product.name.length < 25 ?
              <Card.Title onClick={() => Butter()} className="product-card-title" style={{cursor: "pointer"}}>{product.name}
              </Card.Title>
              :
              <Card.Title onClick={() => Butter()} className="product-card-title" style={{cursor: "pointer"}}>{product.name.slice(0, 21) + '...'}
              </Card.Title>}

              <Card.Text className="product-card-text">
                ₹ {product.price}  
              </Card.Text>
              <div style={{display: "grid"}}>
              <Card.Text className="product-card-text">
                  {product.gender}
              </Card.Text>
              <Card.Text className="product-card-text">
                  {product.rating}
                  <RatingComp rating={product.rating}/>
              </Card.Text>
              {/* <Button style={{display:"block", width: "80%", marginBottom: "1em"}} onClick={ () => removeFromWishlist(product._id)}>
                Remove from Wishlist
              </Button> */}



              {/* <ProductCardCounterComp id={props.id} quantity={props.quantity}/> */}
              </div>

            </Card.Body>
        </Card>
      );
    } else {
      return (
        <div style={{marginTop: "20%"}}>
          <p>Loading...</p>
        </div>
      );
    }
      
} 


// export default class WishlistCardComp extends Component {
//     state = {
//       link : '/product/' + this.props.id,
//       product: null
//     } 

//     componentDidMount() {
//       fetch('/getProduct/' + this.props.id)
//         .then(res => res.json())
//         .then(result => {
//           this.setState({
//             isLoaded: true,
//             product: result[0]
//           });
//         });
      
//   }

//     Butter() {
        
//       window.location.replace('/product/'+ this.props.id); 
//   }

//     render() {
//       if (!this.state.isLoaded) {
//         return <div><h3>Loading ...</h3> </div>;
//       } else {
//           return (
//             // <h1 style={{marginTop: "200px"}}>{this.state.product.name}</h1>
//             <Card style={{width : "20em"}} >
//                 <Card.Img variant="top" src={this.state.product.image01} style = {{width:"15em", marginLeft: "auto", marginRight: "auto" , marginTop:"10%"}}/>
//                 <Card.Body style={{height:"80px", marginLeft:"15%"}}>
//                 <Card.Title onClick={() => this.Butter()} className="product-card-title" style={{cursor: "pointer"}}>{this.state.product.name}</Card.Title>
//                 <Card.Text className="product-card-text">
//                     {this.state.product.price}
//                 </Card.Text>
//                 <ProductCardCounterComp id={props.id} quantity={props.quantity}/>
//                 </Card.Body>
//             </Card>
//           )
      
      
//     } 

//   }

// }
