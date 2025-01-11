import { Link } from "react-router-dom"
import testimg from "./assets/naruto-manga-cover.jpg"
import { useEffect, useState } from "react"

function Profile(){

    const [username,setUsername] = useState()
    const [email,setEmail] = useState()
    const [mangas,setManga] = useState()

    const user = JSON.parse(localStorage.getItem('user'))

    useEffect(()=>{getData(user.token)},[])

    async function getData(value){
        try{
            const res = await fetch(`${import.meta.env.VITE_URL}/api/profile`,{
                headers: {
                    'Authorization': `Bearer ${value}`
                }
            })
            const data = await res.json()
            setUsername(data.user.username)
            setEmail(data.user.email)
            setManga(data.mangas)
        }catch(error){
            console.log(error)
        }
    }

    return(
        <div className="profile-container">
            <p id="username-tag">Welcome, {username}</p>
            <div className="personal-details">
                <h3>Personal Details: </h3>
                <p><b>Username: </b>{username}</p>
                <p><b>Email: </b>{email}</p>
            </div>
            <div className="uploads">
                <h3>Your Uploaded Mangas: </h3>
                <div className="upload">
                    {/* <div className="upload-card">
                        <h4>Manga-Name</h4>
                        <div className="upload-image">
                            <Link><img src={testimg} alt="manga" /></Link>
                        </div>
                    </div> */}
                    {mangas && mangas.map((manga,index)=>(
                        <div key={index} className="upload-card">
                            <h4>{manga.title}</h4>
                            <div className="upload-image">
                                <Link to={`/${manga._id}`}><img src={`${import.meta.env.VITE_URL}/${manga.cover}`} alt="manga" /></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Profile