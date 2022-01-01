import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
    const { logout } = useAuth0();
    return (
      // <button style={{border: "none"}}
      // onClick={() => logout({ returnTo: window.location.origin,})}>
      <div className="logout">
         <i class="fas fa-sign-out-alt" style={{fontSize: "2.5em", color: "#373738"}}onClick={() => logout({ returnTo: window.location.origin})}></i>
      </div>
       
      //  </button>
    );
  };
  
  export default LogoutButton;