import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"
import { useContext, useState } from "react"
import { LoginContext } from "../contexts/LoginContext"
import "./navbar.css"

function NavBar(){

    const context = useContext(LoginContext)

    function logout(){
        localStorage.removeItem('user')
        context.setUser(null)
    }

    return(
        <div className="navbar">
            <div className="logo">
                <Link style={{"textDecoration": "none"}} to={'/'}><h2>Manga-kun</h2></Link>
            </div>
            <div className="links">
                <SearchBar/>
                {context.user && <Link style={{"textDecoration": "none"}} to={'/create'}><p id="create">New Manga</p></Link>}
                {context.user && <Link style={{"textDecoration": "none"}} to={'/profile'}><p id="profile-link">Your Profile</p></Link>}
                {context.user && <p style={{'cursor': 'pointer'}} onClick={logout}>Logout</p>}
                {!context.user && <Link style={{"textDecoration":"none"}} to={'/login'}><p>Log In</p></Link>}
                {!context.user && <Link style={{"textDecoration":"none"}} to={'/signup'}><p>Sign Up</p></Link>}
            </div>
        </div>
    )
}

export default NavBar