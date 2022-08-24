import '../stylesheets/votes.css'
import {useState, useEffect} from 'react'
import { sendVote } from '../Api'

const Votes = ({votes, review_id}) => {

    const [vote, setVote] = useState()
    const [voted, setVoted] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setVote(votes)
    }, [])

    const handleVote = (voteChange) => {
        setIsLoading(true)
        sendVote(review_id, voteChange)
        .then((review) => {
            setIsLoading(false)
        })
        .catch((err) => {
            window.alert(`Failed to update vote. ${err}`)
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

    return <div className="vote-container">
        <img id="upvote" className={(voted) ? `upvote--${voted}` : 'upvote'} src="/img/upvote.png" alt="upvote" onClick={incrementVote}/>
        <img className="d20" src="/img/votes.png" alt="d20-votes"/>
        <p>{vote}</p>
        <img id="downvote" className={(voted) ? `downvote--${voted}` : 'downvote'} src="/img/downvote.png" alt="downvote" onClick={decrementVote}/>
    </div>
}

export default Votes