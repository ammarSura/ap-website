import React, { Component } from "react"; 
import { Nav} from "react-bootstrap"; 
import { useAuth0 } from "@auth0/auth0-react";

import "../App.css"

export default function FooterComp() {
    const { user, isAuthenticated, isLoading } = useAuth0();
    if(isLoading) {
        return (
            <div>
                Loading...
            </div>
        );
    } else {

    
    if (isAuthenticated) {
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
    } else {
        return (
            null
        );
    }

}
}