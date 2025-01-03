import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"

function NavBar(){
    return(
        <div className="navbar">
            <div className="logo">
                <Link style={{"textDecoration": "none"}} to={'/'}><h2 style={{"color": "black"}}>Manga-kun</h2></Link>
            </div>
            <div className="links">
                <SearchBar/>
                <Link style={{"textDecoration": "none"}} to={'/create'}><p id="create">New Manga</p></Link>
                <Link style={{"textDecoration":"none"}} to={'/login'}><p>Log In</p></Link>
                <Link style={{"textDecoration":"none"}} to={'/signup'}><p>Sign Up</p></Link>
            </div>
        </div>
    )
}

export default NavBar