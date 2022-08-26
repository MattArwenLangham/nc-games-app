import '../../stylesheets/votes.css'
import {useState, useEffect} from 'react'
import { sendCommentVote } from '../../Api'

const CommentVotes = ({votes, comment_id}) => {

    const [vote, setVote] = useState()
    const [voted, setVoted] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setVote(votes)
    }, [])

    const handleVote = (voteChange) => {
        setIsLoading(true)
        sendCommentVote(comment_id, voteChange)
        .then(() => {
            setIsLoading(false)
        })
        .catch((err) => {
            window.alert(`Failed to update comment vote. ${err}`)
        })
    }

    const incrementVote = () => {
        if(isLoading) return
        if(voted === "up") {
            setVoted(null)
            setVote((currVote) => currVote - 1)
            handleVote(-1)
        } else if (!voted) {
            setVoted("up")
            setVote((currVote) => currVote + 1)
            handleVote(+1)
        }
    }

    const decrementVote = () => {
        if(isLoading) return
        if(voted === "down") {
            setVoted(null)
            setVote((currVote) => currVote + 1)
            handleVote(+1)
        } else if (!voted) {
            setVote((currVote) => currVote - 1)
            setVoted("down")
            handleVote(-1)
        }
    }

    return <div className="comment-vote-container">
        <img className={(voted) ? `comment-upvote--${voted}` : 'comment-upvote'} src="/img/upvote.png" alt="upvote" onClick={incrementVote}/>
        <img className="comment-d20" src="/img/votes.png" alt="d20-votes"/>
        <p>{vote}</p>
        <img className={(voted) ? `comment-downvote--${voted}` : 'comment-downvote'} src="/img/downvote.png" alt="downvote" onClick={decrementVote}/>
    </div>
}

export default CommentVotes