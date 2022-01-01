import React, { useState, useEffect, useContext } from 'react';
import{ FilterContext } from '../contexts/filter-context'
import {Form, Container, Row, Col} from 'react-bootstrap';
import { SortContext } from "../contexts/sort-context";

export default function SortBar() {

    const sorter = useContext( SortContext );
    

    

    function Butter() {
        const sort1 = document.getElementById("sort").value;
        console.log(sort1);
        sorter.setSort(sort1);
    }

    

    return (
        // <div style={{display: "flex", flexDirection: "column"}}>
        <Container fluid="true" >
 
        
            <Row>
                    Sort:    
            </Row>

            <Row>
                
                <select id="sort">
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating-asc">Rating: Low to High</option>
                    <option value="rating-desc">Rating: High to Low</option>
                </select>
            </Row>
            
            
            {/* <button onClick={() => Butter()}>Filter</button> */}
           
            
            <Row style={{marginTop:"10%", marginBottom: "20%"}}>
                <button onClick={() => Butter()}>Sort</button>
            </Row>
            
            
        </Container>
        
    );
}