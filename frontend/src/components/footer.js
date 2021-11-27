import React, { Component } from "react"; 
import { Nav} from "react-bootstrap"; 
import "../App.css"

export default class FooterComp extends Component{
    render(){
        return(
            <div className="footer">
        <div style={{ color: "white" }}>
          <img
            src="https://res.cloudinary.com/dejzdjexf/image/upload/v1636476022/esa_logo_transparent_fp2tti.png"
            height="50px"
            alt="ESA"
          />
        <div className="a:link">
            <Nav.Link href="/about-us">
                About Us
            </Nav.Link>
            <Nav.Link href="/terms-and-conditions">
                Terms and Conditions
            </Nav.Link>
            <Nav.Link href="/contact-us">
                Contact Us
            </Nav.Link>
        </div> 
        </div>
      </div>
        );  
    }
}