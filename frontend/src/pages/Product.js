import React, { Component, useEffect, useState, useContext } from "react";
import "../App.css";
import {Link} from 'react-router-dom';
import {Container, Row, Col, Image, Button, DropdownButton, Dropdown, List, ListGroup} from "react-bootstrap"
import Reviews from "../components/reviews";
import ProductCardCounterComp from "../components/product-card-counter";
import ProductCardWishlistComp from "../components/product-card-wishlist";
import RatingInputComp from "../components/rating-input";
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
    const [ maxStar, setMaxStar ] = useState(0);
    const [ User, setUser ] = useState(null);
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
      //  let price = 0;

      for (let i = 0; i < cart.length; i++) {
        console.log(cart[i]);
        if (cart[i].product_id===prod_id) {
            quantity = cart[i].quantity;
            
            
        }
        
      }

      console.log(product, product.price)
        
      await fetch('/addToCart', {
          
          method: 'POST',
          body: JSON.stringify(
              { 
                  email: user.email ,
                  product_id: prod_id,
                  quantity: quantity + 1,
                  size: size,
                  price: product.price,
  
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
              name: User.user_name,
              reviewString: review,
              rating: maxStar,

            }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

  
    setMaxStar(0)
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

    function starSetter(x) {
      setMaxStar(x);
  }
  
  function starLooper() {
      var lst = [];
      for (let i = 1; i < 6; i++) {
          lst.push(i)
      }

      
      const stars = lst.map(star => {
          if ( star <= maxStar) {
              return (<i key={star}class="fas fa-star"style={{color: "#fcba03"}} onClick={()=> starSetter(star)}></i>)
          } else {
              return (<i key={star}class="far fa-star"style={{color: "#fcba03"}} onClick={()=> starSetter(star)}></i>)
          }
          
          
        });
          
      

      

        return stars;
  }
  

    

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
          setUser(carter.User)
        } 
        
        if ( !wishlistIsLoaded ) {
          setWishlistLoading(carter.wishlistIsLoaded);
          setWishlist(carter.wishlist.wishlist);
          
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
        return (
            // <h1 style={{marginTop:"200px"}}>{this.state.product.reviews[0].name}</h1>
          <div style={{paddingLeft: "5%", marginTop: "15%"}}> 
            <Container fluid >
      
            <Row lg="12">
                <Col lg="7">
                  <Row lg="6">
                  
                    <Col lg="6" sm="6">
                      <Image src={product.image01} width="100%"/>

                  
                    </Col>
                
                    <Col lg="6"sm="6">
                      <Image src={product.image02} width="100%"/>
                    </Col>
                  </Row>

                  <Row lg="6" style={{marginTop: "2.5%"}}>
                    <Col lg="12">
                    <Row lg="1" style={{marginBottom: "1em"}}>
                      <h3 style={{}}> 
                        Reviews 
                      </h3>
                    </Row>
            
                    <Row lg="1" style={{paddingLeft: "2.5%", paddingRight: "2.5%"}}>
                      <Reviews reviews={product.reviews}/>
                    </Row>
              
                    <Row lg="3" style={{marginTop: "5%"}}>
                      <label>Review this product:</label>
                    </Row>
              
                    <Row lg="4"style={{marginBottom: "2.5%"}}>
                      <div style={{}}>
                        {starLooper()}
                      </div>
                    </Row>

                    <Row lg="1" style={{paddingLeft: "2.5%", paddingRight: "2.5%"}}>
                      <textarea id="addReview" placeholder="Leave your review."></textarea>
                    </Row>       
              
                    <Row lg="4" style={{paddingLeft: "2.5%", paddingRight: "2.5%", marginTop: "2.5%"}}>
                      <button onClick={ () => addReview() }>Submit</button>
                    </Row>
                    </Col>
              
              </Row>

                </Col>

                
      
                <Col lg="5" style={{paddingRight:"5%"}}>
      
                  <div >
                  
                    <h2>{product.name}</h2>
      
                    <h3> ₹ {product.price} </h3>
      
                    <p>{product.description}</p>

                    <ProductCardWishlistComp style={{}}id={prod_id} wishlist={addedToWishlist}size={size}/>
                
                    <div> 
      
                      <div> 

                        <Dropdown style={{
                          marginBottom: "5%", marginTop: "2.5%"
                        }}>
                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="light">
                          
                          {size}
                        </Dropdown.Toggle>

                        <Dropdown.Menu variant="light">
                          
                          {looper()}
                        </Dropdown.Menu>
                        </Dropdown>

                      </div>
      
                      <div>
                        <Button onClick={() => addToCart() } variant="secondary" style={{width:"80%", marginBottom: "5%"}} >
                          Add to Cart
                        </Button>
                      
                      
                        
                      
                      </div>

                    </div>
      
                  </div>
      
                </Col>

                
      
            </Row>

            
            
      
            </Container>
            </div>
      
          );
      }
    
}
