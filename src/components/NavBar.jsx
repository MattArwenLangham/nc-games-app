import '../stylesheets/navbar.css'
import {Link} from 'react-router-dom'

const NavBar = () => {


    return <nav id="nav-bar" className="nav-bar">
            <Link to="/categories" >CATEGORIES</Link>
            <Link to="/reviews" >REVIEWS</Link>
            <Link to="/users" >USERS</Link>
    </nav>
}

export default NavBar