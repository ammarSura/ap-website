import React, { useState, useEffect, useContext } from 'react';
import{ FilterContext } from '../contexts/filter-context'

export default function FilterBar() {

    const filter = useContext( FilterContext );

    function Butter() {
        const checkPrice = document.getElementById('price').checked;
        const checkGender = document.getElementById('gender').checked;
        if ( checkPrice ) {
            filter.setPriceFilter([parseInt(document.getElementById('min').value), parseInt(document.getElementById('max').value)])
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
        // console.log('as', check);
    }

    return (
        <div>
            
            Price: <input type="checkbox" id="price" name="price" value={false}/>
            <input type="text" id="min" name="min" placeholder="Min. price"/>
            <input type="text" id="max" name="max" placeholder="Max. price"/>
            <button onClick={() => Butter()}>Filter</button>
            Gender: <input type="checkbox" id="gender" name="gender" value={false}/>
            <input type="text" id="genderinp" name="genderinp" placeholder="Gender"/>
            {/* <input type="text" id="max" name="max" placeholder="Max. price"/> */}
            <button onClick={() => Butter()}>Filter</button>
            
        </div>
        
    );
}