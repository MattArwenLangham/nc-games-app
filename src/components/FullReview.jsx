import '../stylesheets/full-review.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { fetchReviewById } from '../Api';
import Votes from './Votes'
import Comments from './comments/Comments'
import AddComment from './comments/AddComment'

const FullReview = () => {
    
    const [review, setreview] = useState();
    const { review_id } = useParams();

    useEffect(() => {
        fetchReviewById(review_id)
        .then(({review}) => {
            setreview(review)
        })
    }, [review_id])

    if(!review) return
    const {title, category, designer, owner, review_body, review_img_url, created_at, votes, comment_count} = review;
    const postDate = new Date(created_at).toLocaleDateString("en-UK")
    const postTime = new Date(created_at).toLocaleTimeString("en-UK")

    return <div className="review-container">
        <div className="background" style={{"--img": `url(${review_img_url})`}}></div>
        <div className="review-heading">

            <div className="review-info">
                <img alt="user-avatar"></img>
                <h1>{title}</h1>
                <p className="review-username">By {owner}</p>
                <p className="review-postdate">{`${postDate} ${postTime}`}</p>
            </div>
        </div>
        <p className="review-body">
            {review_body}
        </p>
        <div className="game-info-container">
            <p><strong>Game Type:</strong> {category}</p>
            <p><strong>Created By:</strong> {designer}</p>
        </div>
        <Votes votes={votes} review_id={review_id}/>
        <AddComment review_id={review_id}/>
        <Comments review_id={review_id}/>
    </div>
}

export default FullReview

// "review_id": 12,
// "title": "Occaecat consequat officia in quis commodo.",
// "category": "roll-and-write",
// "designer": "Ollie Tabooger",
// "owner": "happyamy2016",
// "review_body": "Fugiat fugiat enim officia laborum quis. Aliquip laboris non nulla nostrud magna exercitation in ullamco aute laborum cillum nisi sint. Culpa excepteur aute cillum minim magna fugiat culpa adipisicing eiusmod laborum ipsum fugiat quis. Mollit consectetur amet sunt ex amet tempor magna consequat dolore cillum adipisicing. Proident est sunt amet ipsum magna proident fugiat deserunt mollit officia magna ea pariatur. Ullamco proident in nostrud pariatur. Minim consequat pariatur id pariatur adipisicing.",
// "review_img_url": "https://images.pexels.com/photos/278918/pexels-photo-278918.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
// "created_at": "2020-09-13T15:19:28.077Z",
// "votes": 8,
// "comment_count": "1"