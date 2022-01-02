import React, { Component, useState, useEffect, useContext } from "react";
import "../App.css";
import { useAuth0 } from "@auth0/auth0-react";
import { CartContext } from '../contexts/cart-context';
import CartCardComp from '../components/cart-card';
import CheckoutComp from "../components/checkout-bar";





export default function Cart() {

    const carter = useContext( CartContext );
    const [ cart, setCart ] = useState(null);
    const [ cartIsLoaded, setCartLoading ] = useState(false);
    const [ cart1, setCart1 ] = useState([]);
    console.log(cart);
    const [ cart1IsLoaded, setCart1Loading ] = useState(false);

    function looper() {
        // console.log('cart1', cart1)
        const items = cart.map( (item) => 
        <CartCardComp key = {item.key} product_id={item.product_id} size={item.size} quantity={item.quantity } price = {item.price} />
        // <h1 key = {item.key}>{item.product_id}, {item.size}, {item.quantity}</h1>
        
        )
        
        return items;
        
    }

    
    function checkIn(lst, item) {
        for (let i = 0; i < lst.length; i++) {
          console.log(lst[i])
          if (lst[i].product_id === item.product_id ) {
          
            if (lst[i].size === item.size) {
              return true;
            }
          }
          
        }
        return false;
      }

    function counter() {
        // let cart = [{product_id: "4", size: "M"}, {product_id: "4", size: "S"}, {product_id: "4", size: "M"}, {product_id: "4", size: "M"}, {product_id: "4", size: "M"}, {product_id: "5", size: "M"}, {product_id: "5", size: "M"}, {product_id: "5", size: "M"}, {product_id: "5", size: "M"}, {product_id: "5", size: "M"}];

        let lst = [];
        console.log('awes', carter)
        let index = -1;
        for (let i = 0; i < carter.cart.cart.length; i++) {
            if (!checkIn(lst, carter.cart.cart[i])) {
                let q = 0; 
                lst.push( { product_id: carter.cart.cart[i].product_id, size: carter.cart.cart[i].size } )
                index++;
                for (let j = i; j < carter.cart.cart.length; j++) {
                    if (carter.cart.cart[i].product_id === carter.cart.cart[j].product_id && carter.cart.cart[i].size === carter.cart.cart[j].size) {
                        q++;
                    }
                }
                lst[index].key = index;
                lst[index].quantity = q;
            }
            
            
        }

        setCart1(lst);
        setCart1Loading(true);
    }

    

    useEffect( () => {
        if ( carter.cartIsLoaded ) {
            console.log(cart);
            if ( !cartIsLoaded) {
                setCart(carter.cart.cart);
                setCartLoading(true);
                // counter();
            }    
        // } else {
            
            
        // }


        } 
    }
    );

    if (cartIsLoaded) {
        return (
            <div>
                { (carter.cart.cart.length > 0 )?
                    <div style={{display: "grid", gridTemplateColumns: "50% 50%", marginTop: "15%", marginLeft: "20%", marginRight:"20%", overflow:"hidden"}}>
                    <div style={{height: "35em", overflow: "auto"}}>
                        {looper()}
                    </div>
                    <div style={{marginLeft: "40%"}}>
                        <CheckoutComp cart={carter.cart.cart}/>
                    </div>
                    </div>
                
                :
                <h2 style={{marginTop: "15%"}}>No items in cart yet</h2>

            }

            </div>
            
        );
    } else {
        return (
            null
        );
    }
  

    
    
}

 