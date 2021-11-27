import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../App.css"; 

const LoginButton = () => {
  const { loginWithRedirect} = useAuth0();
  

  return (
  <button style={{border: "none", backgroundColor: "#ede5d5"}}onClick={() => loginWithRedirect()}>
    Signin
  </button>);
  
};



export default LoginButton;

