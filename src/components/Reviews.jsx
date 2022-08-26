import { useEffect, useState } from 'react'
import '../stylesheets/Reviews.css'
import {fetchReviews } from '../Api'
import ReviewCard from './ReviewCard'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Reviews = () => {

    const [reviews, setReviews] = useState([])
    const [searchParams] = useSearchParams()
    const [error, setError] = useState('')

    const navigate = useNavigate()
    let category = searchParams.get("category")
    let sort_by = searchParams.get("sort_by")
    let order = searchParams.get("order")

    useEffect(() => {
        fetchReviews(category, sort_by, order)
        .then(({reviews: reviewsArray}) => {
            setReviews(reviewsArray)
        }).catch((err) => {
            console.log(err)
            setError(`ERROR: ${err.response.data.msg}`)
        })
    }, [sort_by, order, category])

    const queryBuilder = (sortBy = sort_by) => {
        let searchQuery = ""
        if(category) searchQuery = (`&category=${category}`)
        if(sortBy) searchQuery = searchQuery.concat(`&sort_by=${sortBy}`)
        if(order) searchQuery = searchQuery.concat(`&order=${order}`)
    
        navigate({
            search: searchQuery.slice(1, searchQuery.length)
        })
    }

    const selectHandle = (event) => {
        let sort_by = event.target.value.toLowerCase().replace(" ", "_")
        if (sort_by.startsWith('--')) return
        queryBuilder(sort_by)
    }

    const toggleOrder = () => {
        if(!sort_by){
            window.alert('Please choose something to sort by.')
            return
        }
        if (order === 'ASC') order = 'DESC'
        else order = 'ASC'
        queryBuilder()
    }
    
    if(!reviews.length) return <h1>{error}</h1>
    
    return <>
    <header className="reviews-header">
        <button>Post Review</button>
        <h1>Critic Reviews</h1>
        <div className="sorting-container">
            <select onChange={selectHandle} className="sort-dropdown">
                <option>--Sort By--</option>
                <option>Created At</option>
                <option >Comment Count</option>
                <option >Votes</option>
            </select>
            <img src="./img/sort.png" onClick={toggleOrder} className={`sort-arrow ${order ?? 'ASC'}`} alt="sorting arrow"/>
        </div>
    </header>
    <div className="review-card-container">
        {reviews.map((reviewCard) => {
            return <ReviewCard info={reviewCard} key={reviewCard.review_id}/>
        })}

    </div>
    </>
}

export default Reviews