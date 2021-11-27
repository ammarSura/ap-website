import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import {Check} from'../util/apis';



const Auth = () => {
  const { user, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    Check();
  }
    

  return (
    isAuthenticated && ( 
     <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        {/* <p>{user}</p> */}
        {/* <JSONPretty data={user} /> */}
        {JSON.stringify(user, null, 2)}
      </div>
    )
  )
  
}

export default Auth;
