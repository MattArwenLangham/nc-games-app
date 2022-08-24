import { useEffect } from 'react'
import '../../stylesheets/comments.css'
import Comment from './Comment'
import {getCommentsByReview} from '../../Api'
import { useState } from 'react'

const Comments = ({review_id}) => {
    
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getCommentsByReview(review_id)
        .then(({comments}) => {
            if(typeof comments === "object") {
                setComments([...comments])
            }
        })
    }, [])

    const GenerateComments = () => {
        if(!comments.length){
            return <p>No Comments</p>
        } else {
            return <>
                {comments.map((comment) => {
                return <Comment comment={comment} key={comment.comment_id}/>                    
                })}
            </>
        }
    }
    
    return <div className="comments-container">
        <GenerateComments />
    </div>
}

export default Comments