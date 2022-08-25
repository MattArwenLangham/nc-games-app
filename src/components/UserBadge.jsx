import { useContext } from "react"
import { LoggedInUserContext } from "../contexts/LoggedInUser"


const UserBadge = () => {
    const { loggedInUser } = useContext(LoggedInUserContext)
    const { user: {username, avatar_url} } = loggedInUser

    console.log(username)

    return <div className="user-badge">
        <img src={avatar_url} alt="user Avatar"/>
        <p id="username-badge">{username}</p>
        <p id="reviews-badge">Reviews:</p>
    </div>
}

export default UserBadge