import React, { useState } from 'react';


export default function CartCounter(props) {

    const [ Count, setCount ] = useState(0);
    const [ isLoaded, setLoading ] = useState(false);

    function getCount() {
        let count = 0;
        for (let i = 0; i < props.cart.length; i++) {
            count = count + props.cart[i].quantity;
            // console.log(props.cart[i].quantity);            
        }
        console.log('c',count)
        setCount(count);
        setLoading(true);
    }

    if ( !isLoaded ) {
        getCount();
        return (
            <div>
                loading...
            </div>
        );
    } else {
        return (
            <div className="circle"> 
                {Count}
            </div>
        );
    }



    
    
}