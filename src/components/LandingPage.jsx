import LatestReviews from './LatestReviews'
import {Link} from 'react-router-dom' 
import '../stylesheets/landing-page.css'

const LandingPage = () => {
    
    return <div className="landing-page-container">
        <LatestReviews />
        <Link className="categories-link" to="categories">Categories</Link>
        <Link className="reviews-link" to="reviews">Reviews</Link>
        <Link className="users-link" to="users">Critic Profiles</Link>
        <Link className="about-us-link" to="about-us">About Nerd Critical</Link>
        </div>
}

export default LandingPage