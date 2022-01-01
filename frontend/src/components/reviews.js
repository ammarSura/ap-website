import React, { Component } from "react"; 
import "../App.css"
import Review from "./review";

export default function Reviews(props){
    function review_looper() {
        console.log('revs', props.reviews)
        const revs = props.reviews.map( (review) => 
        <Review key = {review._id} name = {review.name} review = {review.reviewString} />)

        return revs;
    }
    
    return(
        <div style= {{overflowY: "auto", height: "10em", marginBottom: "1em", borderStyle: "solid", borderWidth: "0.05em"}} >
            
            {review_looper()}
            

            
        </div>
    );  
    
}