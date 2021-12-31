import React, { Component, useEffect, useState, useContext } from "react";
import "../App.css";
import {Link} from 'react-router-dom';
import {Container, Row, Col, Image, Button, DropdownButton, Dropdown, List, ListGroup} from "react-bootstrap"
import Reviews from "../components/reviews";
import ProductCardCounterComp from "../components/product-card-counter";
import ProductCardWishlistComp from "../components/product-card-wishlist";
import { CartContext } from "../contexts/cart-context";
import { useAuth0 } from "@auth0/auth0-react";


const prod_id = window.location.href.slice(30);
// console.log(prod_id);





export default function Product() {


    const [ product, setProduct ] = useState(null);
    const [ size, setSize ] = useState(null);
    const [ quantity, setQuantity ] = useState(0);
    const [ sizes, setSizes ] = useState(null);
    // const [ currentSize, setCurrentSize ] = useState(null);
    const [ addedToWishlist, setAddedToWishlist ] = useState(false);

    const carter = useContext( CartContext );
    const [ cart, setCart ] = useState([]);
    const [ cartIsLoaded, setCartLoading ] = useState(false);
    
    const [ wishlist, setWishlist ] = useState([]);
    const [ wishlistIsLoaded, setWishlistLoading ] = useState(false);
    const [ isLoaded, setLoading ] = useState(false);

    const { user, isAuthenticated } = useAuth0();
    console.log('u', user);

    // function wisher() {
    //   Check1();
    //   if (wishString === 'Add to Wishlist') {
    //     setAddedToWishlist("Remove from Wishlist");
    //   } else {
    //     setAddedToWishlist("Add to Wishlist");
    //   }
      
    // }
    async function Check1() {
   
    
      await fetch('/addToWishlist', {
          
          method: 'POST',
          body: JSON.stringify({ email: user.email, product_id: prod_id}),
          headers: {
              'Content-Type': 'application/json'
          }
      })
    
    
    }

    async function addToCart() {
       console.log(cart);
       let quantity = 0;

      for (let i = 0; i < cart.length; i++) {
        console.log(cart[i]);
        if (cart[i].product_id===prod_id) {
            quantity = cart[i].quantity;
            
        }
        
      }

      console.log(quantity)
        
      await fetch('/addToCart', {
          
          method: 'POST',
          body: JSON.stringify(
              { 
                  email: user.email ,
                  product_id: prod_id,
                  quantity: quantity + 1,
                  size: size,
  
              }),
          headers: {
              'Content-Type': 'application/json'
          }
      })

      // carter.setCartLoading(false);
      window.location.reload()
  
  }

  async function addReview() {
    // console.log(document.getElementById('addReview').value)
    const review = document.getElementById('addReview').value;
    console.log('re',review);
        
    await fetch('/addReview', {
        
        method: 'POST',
        body: JSON.stringify(
            { 
              id: prod_id,
              name: 'ammar' ,
              reviewString: review

            }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    // carter.setCartLoading(false);
    document.getElementById('addReview').value = '';
    window.location.reload()

}

    // function chooseSize() {
    //   console.log('oka')
    // }

    function looper() {
      const lst = product.sizes;
      
      const comps = lst.map((size) => 
        <Dropdown.Item key = {size} onClick={ () => setSize(size) }> {size} </Dropdown.Item> )

      return comps;
    };

    

    // function carter() {
    //   console.log('okay');
    
    //   setAddedToCart("Added to Cart");
    // }

    useEffect(() =>  {
        if ( !isLoaded ) {
        fetch('/getProduct/' + prod_id)
          .then(res => res.json())
          .then(result => {
            // this.setState({
            //   isLoaded: true,
            //   product: result[0],
              
            // });
            setProduct(result[0]);
            setLoading(true);
            setSize(result[0].sizes[0]);
          });
        }

        if ( !cartIsLoaded) {
          console.log('okay')
          setCartLoading(carter.cartIsLoaded);
          setCart(carter.cart.cart);
        } 
        // else {
        //   for (let i = 0; i < cart.length; i++ ) {
        //     // console.log('aok', cart[i])
        //     if (prod_id===cart[i].product_id) {
        //       // setAddedToCart("Added to Cart");
        //       setQuantity(cart[i].quantity);
        //       setSizes(cart[i].sizes);
        //       // console.log('q', quantity);
        //     }
        //   }
        // }
        if ( !wishlistIsLoaded ) {
          setWishlistLoading(carter.wishlistIsLoaded);
          setWishlist(carter.wishlist.wishlist);
          // console.log(carter.wishlist.wishlist)
          
        } else {
          console.log('wishie', wishlist);
          for (let i = 0; i < wishlist.length; i++ ) {
            if (prod_id===wishlist[i].product_id) {
              setAddedToWishlist(true);
            }
          }
        }



        console.log(size)
    });
    

    if ( !isLoaded ) {
        return <div>Loading ... </div>;
      } else {
        console.log('w', wishlist)
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
                  <div>
                      <h3 style={{
                        marginTop:"12%"
                      }}> Reviews </h3>
      
                      <div>
                        <Reviews reviews={product.reviews}/>
                        
                      </div>
      
      
                      
                      <label>Review this product:</label>
                      <textarea className="form-control" id="addReview" rows="3">

                      </textarea>
                      <button onClick={ () => addReview() }>Submit</button>
                     
      
                    </div>
                </Col>
                <Col sm={4}>
                  <Image src={product.image02} height="700px"/>
                </Col>
      
                <Col sm={3}>
      
      
                  <div style={{
                    marginLeft: "7%", 
                  }}>
                  
                  <h1>{product.name}</h1>
      
                  <h3> {product.price} </h3>
      
                <p>{product.description}</p>
                
                    <div> 
      
                    <div> 

                      <Dropdown style={{
                      marginTop: "5%", 
                      marginBottom: "5%"
                      }}>
                      <Dropdown.Toggle id="dropdown-button-dark-example1" variant="light">
                          {/* Select Size */}
                          {size}
                      </Dropdown.Toggle>

                      <Dropdown.Menu variant="light">
                          
                          {looper()}
                      </Dropdown.Menu>
                      </Dropdown>

                      </div>
      
                      <div className="d-grid gap-2">
                      <Button onClick={() => addToCart() } variant="secondary" size="lg" style={{width:"80%"}} >
                      Add to Cart
                      </Button>
                      
                      {/* <Button variant="secondary" size="lg" onClick={() => wisher()}> */}
                      {/* {wishString} */}
                      {/* Add to Wishlist */}
                      {/* </Button> */}
                      <ProductCardWishlistComp style={{marginBottom: "100px"}}id={prod_id} wishlist={addedToWishlist}size={size}/>
                      {/* <ProductCardCounterComp id={prod_id} quantity={quantity} size={size} sizes={sizes}/> */}
                      </div>
                      {/* <div>
                      <h3 style={{
                        marginTop:"12%"
                      }}> Reviews </h3>
      
                      <div>
                        <Reviews reviews={product.reviews}/>
                        
                      </div>
      
      
                      
                      <label>Review this product:</label>
                      <textarea className="form-control" id="addReview" rows="3">

                      </textarea>
                      <button onClick={ () => addReview() }>Submit</button>
                     
      
                    </div> */}
                    </div>
      
                  </div>
      
                </Col>
      
            </Row>
      
            </Container>
      
            </div> 
          );
      }
    
}
