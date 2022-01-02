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
import MenSweatshirts from './pages/products/Men/Men-Sweatshirts';
import WomenSweatshirts from './pages/products/Women/Women-Sweatshirts';
import MenJackets from './pages/products/Men/Men-Jackets';
import WomenJackets from './pages/products/Women/Women-Jackets';
import MenTrousers from './pages/products/Men/Men-Trousers';
import WomenTrousers from './pages/products/Women/Women-Trousers';
import MenHoodies from './pages/products/Men/Men-Hoodies';
import WomenHoodies from './pages/products/Women/Women-Hoodies';
import Profile from './pages/Profile';
import Product from './pages/Product';
import Wishlist from './pages/Wishlist';
import UserDetails from './pages/UserDetails';
import Cart from './pages/Cart';
import {CartProvider} from "./contexts/cart-context";
import Checkout from './pages/Checkout';





export default function App() {

    
    
    return (
      <div>
        
        <CartProvider>
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
        <Route exact path="/men/sweatshirts" element={<MenSweatshirts/>}/>
        <Route exact path="/women/sweatshirts" element={<WomenSweatshirts/>}/>
        <Route exact path="/men/jackets" element={<MenJackets/>}/>
        <Route exact path="/women/jackets" element={<WomenJackets/>}/>
        <Route exact path="/men/trousers" element={<MenTrousers/>}/>
        <Route exact path="/women/trousers" element={<WomenTrousers/>}/>
        <Route exact path="/men/hoodies" element={<MenHoodies/>}/>
        <Route exact path="/women/hoodies" element={<WomenHoodies/>}/>
        <Route exact path="/wishlist" element={<Wishlist/>}/>
        <Route exact path="/user-details" element={<UserDetails/>}/>
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/checkout" element={<Checkout/>} />

        </Routes>

        <FooterComp />

        </CartProvider>
          
        </div>
    );
}
