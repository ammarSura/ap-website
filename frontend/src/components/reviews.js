import React, { Component } from "react"; 
import "../App.css"
import Review from "./review";

export default class Reviews extends Component{
    review_looper() {

        const revs = this.props.reviews.map( (review) => 
        <Review key = {review.name} name = {review.name} review = {review.reviewline} />)

        return revs;
    }
    render(){
        return(
            <div>
                
                {this.review_looper()}
                

                
            </div>
        );  
    }
}