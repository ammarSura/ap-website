import React, { Component, useState, useEffect, useContext } from "react";
import "../App.css";
import ProductCardGroupComp from "./product-card-group";
import ProductCardComp from "./product-card";
import { FilterContext } from '../contexts/filter-context';
import { SortContext } from "../contexts/sort-context";


export default function ProductDisplayComp (props) {
    const filter = useContext( FilterContext );
    const sorter = useContext( SortContext );

    
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
        console.log(lst1)
        
       

        for (let i = 0; i < lst1.length; i++) {
            var checkPrice = false;
            var checkGender = false;
            var checkRating = false;
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
                    checkGender = true;
                }
            } else {
                checkGender = true;
            }

            if (filter.ratingFilter !== null) {
                console.log('rew', filter.ratingFilter, lst1[i].rating)
                if (lst1[i].rating >= filter.ratingFilter) {
                    console.log('osad')
                    checkRating = true;
                }
            } else {
                checkRating = true;
            }

            if ( checkGender && checkPrice && checkRating ) {
                lst.push(lst1[i]);
            }

            if (sorter.sort !== null) {
                if (sorter.sort === "price-asc") {
                    lst.sort((first, second) => (first.price - second.price));
                } else if ( sorter.sort === "price-desc") {
                    lst.sort((first, second) => (second.price - first.price));
                } else if ( sorter.sort === "rating-asc") {
                    lst.sort((first, second) => (first.rating - second.rating));
                } else {
                    lst.sort((first, second) => (second.rating - first.rating));
                }
                
            }
        }
            
        

        // console.log(lst)
            
        
        
        // const mainlst = [];
        // for (let i = 0; i < lst.length; i = i + 3) {
            
        //     if (lst.length - i >= 3) {
        //     const sublst = lst.slice(i, i + 3);
        //     mainlst.push(sublst);

        //     } else {
        //         const sublst = lst.slice(i, lst.length);
        //         mainlst.push(sublst);
        //     }
        // }

        // const comps = mainlst.map( (prod) => 
        // <ProductCardGroupComp key = {prod[0].id} lst = {prod} /> );
        const comps = lst.map( (prod) => 
        <ProductCardComp key = {prod.id} id = {prod.id} name = {prod.name} image01={prod.image01} price={prod.price} quantity={prod.quantity} wishlist={prod.wishlist} gender = {prod.gender} rating={prod.rating}/> );

        return comps;
    }
    

    
  
    return (
        <div>
            
            {looper()}
        </div>
    
        
    ); 
   

    
} 
        
      
    
