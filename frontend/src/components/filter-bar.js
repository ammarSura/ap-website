import React, { useState, useEffect, useContext } from 'react';
import{ FilterContext } from '../contexts/filter-context'
import {Form, Container, Row, Col} from 'react-bootstrap';

export default function FilterBar() {

    const filter = useContext( FilterContext );
    

    

    function Butter() {
        const checkPrice = document.getElementById('price').checked;
        const checkGender = document.getElementById('gender').checked;
        const checkRating = document.getElementById('rating').checked;
        console.log(document.getElementById("priceRange").value)
        // console.log(document.getElementById("genderinp").value)
        if ( checkPrice ) {
            let p = document.getElementById("priceRange").value;
            let min = 0;
            let max = 1000000;

            if (p === "1000") {
                min = 0;
                max = 1000
            } else if (p === "5000") {
                min = 1000;
                max = 5000;
            } else  if (p === "10000") {
                min = 5000;
                max = 10000;
            } else {
                min = 10000;
            }
            filter.setPriceFilter([min, max])
            console.log('axe',filter.priceFilter)
        } else {
            filter.setPriceFilter(null)
        }

        if ( checkGender ) {
            filter.setGenderFilter((document.getElementById('genderinp').value));
            console.log('axe',filter.GenderFilter)
        } else {
            filter.setGenderFilter(null);
        }
        if ( checkRating ) {
            // console.log('raw', typeof())
            filter.setRatingFilter(parseInt(document.getElementById('ratinginp').value));
            console.log('axe',filter.RatingFilter)
        } else {
            filter.setRatingFilter(null);
        }
        
    }

    function foo() {
        console.log('asdasd')
    }

    return (
        <div >
        <Container fluid="true" >
 
        
            <Row>

                <Col>
                    Price:
                </Col>
                
                <Col>
                    <input type="checkbox" id="price" name="price" value={false}/>
                </Col>

                
                 
            </Row>

            <Row>
                {/* <input type="text" id="min" name="min" placeholder="Min. price"/>
                <input type="text" id="max" name="max" placeholder="Max. price"/> */}
                <select placeholder="price" id="priceRange">
                    <option value="1000">0-1000</option>
                    <option value="5000">1000-5000</option>
                    <option value="10000">5000-10000</option>
                    <option value="10000+">10000+</option>
                </select>
            </Row>
            
            
            {/* <button onClick={() => Butter()}>Filter</button> */}
            <Row>
                <Row>

                    <Col>
                        Gender: 
                    </Col>
                
                    <Col style={{}}>
                        <input type="checkbox" id="gender" name="gender" value={false}></input>
                    </Col>

                
                 
                </Row>

                {/* <Row style={{width:"100%"}}> */}

            
                {/* <input type="text" id="genderinp" name="genderinp" placeholder="Gender"/> */}
                <select placeholder="Gender" id="genderinp" name="genderinp">
                    <option value="Women">Women</option>
                    <option value="Men">Men</option>
                    
                </select>
                {/* </Row> */}

            </Row>
            
            {/* <input type="text" id="max" name="max" placeholder="Max. price"/> */}
            <Row>
                <Row>

                    <Col>
                        Rating: 
                    </Col>

                    <Col style={{}}>
                        <input type="checkbox" id="rating" name="rating" value={false}></input>
                    </Col>



                </Row>
            </Row>

            <Row>
                <select placeholder="Rating" id="ratinginp" name="rating">
                    
                    <option value="4">4+</option>
                    <option value="3">3+</option>
                    <option value="2">2+</option>
                    <option value="1">1+</option>
                    <option value="0">0+</option>
                    
                </select>
            </Row>
            
            <Row style={{marginTop:"10%"}}>
                <button onClick={() => Butter()}>Filter</button>
            </Row>
            
            
        </Container>
        </div>
        
    );
}