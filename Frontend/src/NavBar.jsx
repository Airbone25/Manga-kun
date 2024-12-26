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
                <Link style={{"textDecoration":"none"}} to={'/signin'}><p>Sign In</p></Link>
            </div>
        </div>
    )
}

export default NavBar