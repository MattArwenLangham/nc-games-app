import '../stylesheets/full-review.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { fetchReviewById, getUsersByUsername } from '../Api';
import Votes from './Votes'
import AddComment from './comments/AddComment'
import Comments from './comments/Comments'

const FullReview = () => {
    
    const [review, setreview] = useState()
    const [user, setUser] = useState({avatar_url: ""})
    const { review_id } = useParams()
    const {avatar_url} = user
    const [commentCount, setCommentCount] = useState(0)

    useEffect(() => {
        fetchReviewById(review_id)
        .then(({review}) => {
            setreview(review)
            setCommentCount(review.comment_count)
            return review.owner
        })
        .then((user) => {
            getUsersByUsername(user)
            .then(({user}) => {
                setUser(user)
            })
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
                <img className="review-user-avatar" alt="user-avatar" src={avatar_url}></img>
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
        <h3 className="comment-heading">Comments: {commentCount}</h3>
        <AddComment review_id={review_id} setCommentCount={setCommentCount}/>
        <Comments review_id={review_id} setCommentCount={setCommentCount} commentCount={commentCount}/>
    </div>
}

export default FullReview