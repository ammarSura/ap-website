import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
// import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';


import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(

  <React.StrictMode>

    <Router>

    <Auth0Provider
    domain="dev-4hzu5c-y.us.auth0.com"
    clientId="kKJqCr1w8KniEBjIWNdRuOcn2mnvLkwl"
    redirectUri={window.location.origin}>
    {/* redirectUri={"/wishlist"} > */}

    <App />

    </Auth0Provider>
    
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);
