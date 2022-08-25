import { useContext } from 'react';
import {LoggedInUserContext} from '../../contexts/LoggedInUser'
import { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { postComment } from '../../Api';
import '../../stylesheets/comments.css'

const AddComment = () => {
    const { review_id } = useParams();
    const ref = useRef(null);
    const [isLoading, setIsLoading] = useState(false)
    const {loggedInUser} = useContext(LoggedInUserContext)
    const { user: {username} } = loggedInUser

    const handleSubmit = (event) => {
        event.preventDefault()
        const comment = ref.current.value
        const commentBox = document.getElementById('comment-box')
        const submit = document.getElementById('comment-submit')

        setIsLoading(true)
        postComment(review_id, comment, username).then((comment) => {
            setIsLoading(true)
            submit.innerHTML = 'Comment Posted!'
            commentBox.style.backgroundColor = 'green'
            console.log(comment)
        })
        .catch(({response}) => {
            window.alert(response.data.msg)
            commentBox.removeAttribute('disabled')
            submit.removeAttribute('disabled');
            commentBox.style.backgroundColor = 'white';
            submit.innerHTML = 'Post comment';
        })

        commentBox.disabled = 'true'
        submit.disabled = 'true'
        commentBox.style.backgroundColor = 'orange'
        submit.innerHTML = 'Comment Posting'
    }

    return <form onSubmit={handleSubmit} id="comment" className="comment-box-form"> 
        <textarea ref={ref} id="comment-box" className="comment-input-box"/>
        <button id="comment-submit">Post comment</button>
    </form>
}

export default AddComment