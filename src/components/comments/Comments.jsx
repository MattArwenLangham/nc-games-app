import { useEffect } from 'react'
import '../../stylesheets/comments.css'
import Comment from './Comment'
import {getCommentsByReview} from '../../Api'
import { useState } from 'react'

const Comments = ({review_id, commentCount, setCommentCount}) => {
    
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getCommentsByReview(review_id)
        .then(({comments: commentArray}) => {
            if(typeof commentArray === "object") {
                setComments([...commentArray])
            }
        })
    }, [commentCount])

    const GenerateComments = () => {
        if(!comments.length){
            return <p>No Comments</p>
        } else {
            return <>
                {comments.map((comment) => {
                return <Comment comment={comment} key={comment.comment_id} setCommentCount={setCommentCount}/>                    
                })}
            </>
        }
    }
    
    return <div className="comments-container">
        <GenerateComments />
    </div>
}

export default Comments