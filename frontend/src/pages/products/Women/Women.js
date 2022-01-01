import React, { Component, useState, useEffect, useContext } from "react";
import "../../../App.css";
import ProductDisplayComp from '../../../components/product-display';
import FilterBar from '../../../components/filter-bar';
import { FilterProvider } from "../../../contexts/filter-context";
import { CartContext } from "../../../contexts/cart-context";
import PageDisplay from "../../../components/page-display";




export default function Women() {
  

  
  return (
    <PageDisplay string='/search/gender/Women'/>
  );

 
    
}

 