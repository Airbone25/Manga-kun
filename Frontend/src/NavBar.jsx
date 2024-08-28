
function NavBar(){
    return(
        <div className="navbar">
            <div className="logo">
                <h2>Manga-kun</h2>
            </div>
            <div className="links">
                <input type="search" name="search" id="search" placeholder="Search Manga" autoComplete="off"/>
                <a id="create" href="/create">New Manga</a>
                <a href="/signin">Sign In</a>
            </div>
        </div>
    )
}

export default NavBar