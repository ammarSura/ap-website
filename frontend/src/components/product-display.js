import React, { Component, useState, useEffect, useContext } from "react";
import "../App.css";
import ProductCardGroupComp from "./product-card-group";
import { FilterContext } from '../contexts/filter-context';


export default function ProductDisplayComp (props) {
    const filter = useContext( FilterContext );
    
    console.log('asa', filter);

    // useEffect( () => {
    //     if (filter.pricefilter !== null) {
    //         for (let i = 0; i < products.length; i++) {
    //           if (products[i].price !== 1499) {
    //             products.slice(i, i + 1);
    //           }
    //         }
    //       }
    // });
    
  
    function looper() {
        var lst1 = props.lst.slice();
        var lst = [];
        
       

        for (let i = 0; i < lst1.length; i++) {
            var checkPrice = false;
            var checkGender = false;
            if (filter.priceFilter !== null) {
                if (lst1[i].price >= filter.priceFilter[0] && lst1[i].price <= filter.priceFilter[1] ) {
                // lst.push(lst1[i])
                checkPrice = true;
                // console.log('okay')
                } 
            } else {
                // lst.push(lst1[i])
                checkPrice = true;
            }

            if (filter.genderFilter !== null) {
                if (lst1[i].gender === filter.genderFilter ) {
                    checkGender = true
                }
            } else {
                checkGender = true;
            }

            if ( checkGender && checkPrice ) {
                lst.push(lst1[i]);
            }
        }
            
        

        // console.log(lst)
            
        
        
        const mainlst = [];
        for (let i = 0; i < lst.length; i = i + 3) {
            
            if (lst.length - i >= 3) {
            const sublst = lst.slice(i, i + 3);
            mainlst.push(sublst);

            } else {
                const sublst = lst.slice(i, lst.length);
                mainlst.push(sublst);
            }
        }

        const comps = mainlst.map( (prod) => 
        <ProductCardGroupComp key = {prod[0]._id} lst = {prod} /> );

        return comps;
    }
    

    
  
    return (
        <div>
            
            {looper()}
        </div>
    
        
    ); 
   

    
} 
        
      
    
