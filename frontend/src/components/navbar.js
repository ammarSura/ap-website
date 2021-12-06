import React, { Component, useState, useContext } from "react";
import {Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import { InputGroup, FormControl } from "react-bootstrap";
import "../App.css";
import {Check} from "../util/apis";
import LoginButton from "./login-button";
import SearchBar from "./search-bar";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from './logout-button';
import { CartContext } from '../contexts/search-context';





export default function NavbarComp() {

  const { user, isAuthenticated } = useAuth0();
  const [ db_state, setDbState ] = useState(false);
  const carter = useContext( CartContext );

  if (isAuthenticated) {
    
    if(db_state === false) {
      if (user.hasOwnProperty('given_name')) {
        Check({
          first_name: user.given_name,
          last_name: user.family_name,
          birthday: '',
          gender: '',
          email: user.email,
          addresses: [],
          cart: [],
          orders: [],
          wishlist: [],
        });
      } else {
        Check({
          first_name: '',
          last_name: '',
          birthday: '',
          gender: '',
          email: user.email,
          addresses: [],
          cart: [],
          orders: [],
          wishlist: [],
        });
      }
      setDbState(true);
    }
   
    
    
    console.log(user.hasOwnProperty('given_name'))
    return (
      <Navbar id="main-navbar" fixed="top" collapseOnSelect expand="lg" bg="myRed" variant="light">
        <Container>
        <Navbar.Brand href="/" style={{marginTop:"1%", marginBottom:"1%"}}><img src ="https://res.cloudinary.com/dejzdjexf/image/upload/v1636476022/esa_logo_transparent_fp2tti.png" height = "60px" alt="ESA"/></Navbar.Brand>
        <div>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Men" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/men/tshirts">Tshirts</NavDropdown.Item>
              <NavDropdown.Item href="/men/jeans">Jeans</NavDropdown.Item>
              <NavDropdown.Item href="/men/trousers">Trousers</NavDropdown.Item>
              <NavDropdown.Item href="/women/shirts">Shirts</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/men">View All</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Women" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/women/tshirts">Tshirts</NavDropdown.Item>
              <NavDropdown.Item href="/women/jeans">Jeans</NavDropdown.Item>
              <NavDropdown.Item href="/women/trousers">Trousers</NavDropdown.Item>
              <NavDropdown.Item href="/women/shirts">Shirts</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/women">View All</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav style = {{ paddingTop: "17px", marginRight: "5%" }}>
          
          <SearchBar placeholder="Search"/>
            
          </Nav>
          <Nav style={{marginRight:"5%"}}>
            <Nav.Item style={{marginRight:"10%"}}> 
              <Link to="/profile">
                <img src="https://res.cloudinary.com/dejzdjexf/image/upload/v1636476214/user_pjvppm.png" style={{
              height: "30px"}}>
                </img></Link>
            </Nav.Item>
            <Nav.Item style={{marginRight:"8%"}}><Link to="/wishlist"><img src="https://res.cloudinary.com/dejzdjexf/image/upload/v1636477321/love_sdy3fm.png" style={{
              height: "30px"
            }}/></Link></Nav.Item>
            <Nav.Item style={{ marginRight:"10%"}}>
              <Link to="/cart">
              <img src="https://res.cloudinary.com/dejzdjexf/image/upload/v1636475050/shopping-bag_rtxh3c.png" style={{
              height: "30px"
            }}/>
            </Link>
            {/* {carter.cart.cart.length} */}
            </Nav.Item>
            <LogoutButton/>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar> 
    )
  } else {
    return ( 
      <h1>Sign in to shop!</h1>
       
      // <Navbar id="main-navbar" fixed="top" collapseOnSelect expand="lg" bg="myRed" variant="light">
      //   <Container>
      //   <Navbar.Brand href="/" style={{marginTop:"1%", marginBottom:"1%"}}><img src ="https://res.cloudinary.com/dejzdjexf/image/upload/v1636476022/esa_logo_transparent_fp2tti.png" height = "60px" alt="ESA"/></Navbar.Brand>
      //   <div>
      //   </div>
      //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      //   <Navbar.Collapse id="responsive-navbar-nav">
      //     <Nav className="me-auto">
      //       <NavDropdown title="Men" id="collasible-nav-dropdown">
      //         <NavDropdown.Item href="/men/tshirts">Tshirts</NavDropdown.Item>
      //         <NavDropdown.Item href="/men/jeans">Jeans</NavDropdown.Item>
      //         <NavDropdown.Item href="/men/trousers">Trousers</NavDropdown.Item>
      //         <NavDropdown.Item href="/women/shirts">Shirts</NavDropdown.Item>
      //         <NavDropdown.Divider />
      //         <NavDropdown.Item href="/men">View All</NavDropdown.Item>
      //       </NavDropdown>
      //       <NavDropdown title="Women" id="collasible-nav-dropdown">
      //         <NavDropdown.Item href="/women/tshirts">Tshirts</NavDropdown.Item>
      //         <NavDropdown.Item href="/women/jeans">Jeans</NavDropdown.Item>
      //         <NavDropdown.Item href="/women/trousers">Trousers</NavDropdown.Item>
      //         <NavDropdown.Item href="/women/shirts">Shirts</NavDropdown.Item>
      //         <NavDropdown.Divider />
      //         <NavDropdown.Item href="/women">View All</NavDropdown.Item>
      //       </NavDropdown>
      //     </Nav>
      //     <Nav style = {{ paddingTop: "17px", marginRight: "5%" }}>
            
      //       <SearchBar/>
            
      //     </Nav>
      //     <Nav style={{marginRight:"10%"}}>
      //       <Nav.Item style={{marginLeft:"5%", marginRight:"10%"}}> 
      //         <LoginButton/> 
      //       </Nav.Item>
      //       <Nav.Item style={{marginRight:"10%"}}>
      //         <Link to="/wishlist">
      //           <img src="https://res.cloudinary.com/dejzdjexf/image/upload/v1636477321/love_sdy3fm.png" style={{
      //         height: "30px"}}/> 
      //         </Link>
      //       </Nav.Item>
      //       <Nav.Item>
      //         <Link to="/cart">
      //           <img src="https://res.cloudinary.com/dejzdjexf/image/upload/v1636475050/shopping-bag_rtxh3c.png" style={{
      //           height: "30px" }}/>
      //         </Link>
      //       </Nav.Item>
      //     </Nav>
      //   </Navbar.Collapse>
      //   </Container>
      // </Navbar> 
  );
  }
    
    
}