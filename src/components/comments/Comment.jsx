import { useState } from 'react'
import { useEffect } from 'react'
import { getUsersByUsername } from '../../Api'
import Votes from '../Votes'

const Comment = ({comment}) => {

    const {body, author, created_at, votes} = comment
    const [user, setUser] = useState([])
    const {avatar_url} = user

    const postDate = new Date(created_at).toLocaleDateString("en-UK")
    const postTime = new Date(created_at).toLocaleTimeString("en-UK")

    useEffect(() => {
        getUsersByUsername(author).then(({user}) => {
            setUser(user)
        })
    })

    return <div className="comment-container">
        <img className="comment-avatar" alt={author} src={avatar_url}/>
        <p className="comment-author">{author}</p>
        <p className="comment-body">{body}</p>
        <p className="comment-timestamp">{postDate + "\n" + postTime}</p>
        <Votes votes={votes}/>
    </div>
}

export default Comment