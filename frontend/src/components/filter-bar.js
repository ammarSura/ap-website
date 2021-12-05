import React, { useState, useEffect, useContext } from 'react';
import{ FilterContext } from '../contexts/filter-context'

export default function FilterBar() {

    const filter = useContext( FilterContext );
    console.log('aas', filter.priceFilter);

    function Butter() {
        const check = document.getElementById('price').checked;
        if (check) {
            filter.setPriceFilter([parseInt(document.getElementById('min').value), parseInt(document.getElementById('max').value)])
            console.log('axe',filter.priceFilter)
        } else {
            filter.setPriceFilter(null)
        }

        console.log('as', check);
    }

    return (
        <div>
            
            Price: <input type="checkbox" id="price" name="price" value={false}/>
            <input type="text" id="min" name="min" placeholder="Min. price"/>
            <input type="text" id="max" name="max" placeholder="Max. price"/>
            <button onClick={() => Butter()}>Filter</button>
            
        </div>
        
    );
}