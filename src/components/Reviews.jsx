import { useEffect, useState } from 'react'
import '../stylesheets/Reviews.css'
import {fetchReviews } from '../Api'
import ReviewCard from './ReviewCard'
import { useSearchParams } from 'react-router-dom'

const Reviews = () => {

    const [reviews, setReviews] = useState([])
    const [searchParams] = useSearchParams()

    useEffect(() => {
        let category = searchParams.get("category")
        fetchReviews(category)
        .then(({reviews: reviewsArray}) => {
            setReviews(reviewsArray)
        })
    }, [])

    const selectHandle = () => {
        console.log()
    }
    
    return <>
    <header className="reviews-header">
        <button>Post Review</button>
        <h1>Critic Reviews</h1>
        <select>
            <option>--Sort By--</option>
            <option>Date Posted</option>
            <option>Most Discussed</option>
            <option>Most Voted</option>
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