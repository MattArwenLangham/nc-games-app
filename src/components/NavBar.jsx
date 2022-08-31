import '../stylesheets/navbar.css'
import {Link} from 'react-router-dom'

const NavBar = () => {


    return <nav id="nav-bar" className="nav-bar">
            <Link className="page-links" to="/categories" >CATEGORIES</Link>
            <Link className="page-links" to="/reviews" >REVIEWS</Link>
            <Link className="page-links" to="/users" >USERS</Link>
    </nav>
}

export default NavBar