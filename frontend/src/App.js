import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import NavbarComp from "./components/navbar";
import FooterComp from "./components/footer"; 
import TnC from "./pages/T&C";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs"
import Results from './pages/Results';
import Men from './pages/products/Men/Men';
import Women from './pages/products/Women/Women';
import MenTshirts from './pages/products/Men/Men-Tshirts';
import WomenTshirts from './pages/products/Women/Women-Tshirts';
import MenJeans from './pages/products/Men/Men-Jeans';
import WomenJeans from './pages/products/Women/Women-Jeans';
import MenTrousers from './pages/products/Men/Men-Trousers';
import WomenTrousers from './pages/products/Women/Women-Trousers';
import MenShirts from './pages/products/Men/Men-Shirts';
import WomenShirts from './pages/products/Women/Women-Shirts';
import Profile from './pages/Profile';
import Product from './pages/Product';
import Wishlist from './pages/Wishlist';
import UserDetails from './pages/UserDetails';
// import Autocomplete from './util/searchie';
import Autocomplete from './util/auto';




export default function App() {

  
    
    return (
      <div>
        <NavbarComp/> 
        
  
        <Routes> 
        
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/about-us" element={<AboutUs />}/>
        <Route exact path="/contact-us" element={<ContactUs/>}/>
        <Route exact path="/terms-and-conditions" element={<TnC/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
        <Route exact path="/product/:product_id" element={<Product/>}/>
        <Route exact path="/results/:term" element={<Results/>}/>
        <Route exact path="/men" element={<Men/>}/>
        <Route exact path="/women" element={<Women/>}/>
        <Route exact path="/men/tshirts" element={<MenTshirts/>}/>
        <Route exact path="/women/tshirts" element={<WomenTshirts/>}/>
        <Route exact path="/men/jeans" element={<MenJeans/>}/>
        <Route exact path="/women/jeans" element={<WomenJeans/>}/>
        <Route exact path="/men/trousers" element={<MenTrousers/>}/>
        <Route exact path="/women/trousers" element={<WomenTrousers/>}/>
        <Route exact path="/men/shirts" element={<MenShirts/>}/>
        <Route exact path="/women/shirts" element={<WomenShirts/>}/>
        <Route exact path="/wishlist" element={<Wishlist/>}/>
        <Route exact path="/user-details" element={<UserDetails/>}/>

        </Routes>

        <FooterComp />
        
        {/* <Autocomplete/> */}
        </div>
    );
}
