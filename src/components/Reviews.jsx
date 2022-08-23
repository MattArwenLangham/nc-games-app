import { useEffect, useState } from 'react';
import '../stylesheets/Reviews.css';
import {fetchReviews } from '../Api'
import ReviewCard from './ReviewCard'

const Reviews = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetchReviews()
        .then(({reviews: reviewsArray}) => {
            setReviews(reviewsArray)
        })
    }, [])
    
    console.log(reviews)
    return <>
    <header className="reviews-header">
        <button>Post Review</button>
        <h1>Critic Reviews</h1>
        <select>
            <label>sort by</label>
            <option></option>
        </select>
    </header>
    <div className="review-card-container">
        {reviews.map((reviewCard) => {
            return <ReviewCard info={reviewCard} key={reviewCard.review_id}/>
        })}

    </div>
    </>
}

export default Reviews