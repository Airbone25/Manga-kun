import { useParams } from "react-router"
import { useState,useEffect } from "react"

export default function Manga() {
    const {id} = useParams()

    const [manga,setManga] = useState()

    useEffect(()=>{getManga(id)},[])

    async function getManga(id){
        try{
            const res = await fetch(`http://localhost:3000/api/${id}`)
            if(!res.ok){
                throw new Error('Failed to fetch manga')
            }
            const data = await res.json()
            setManga(data)
        }catch(error){
            console.error(error)
        }
    }

    return(
        <div className="manga-profile">
            <div className="manga-container">
                {manga && (<div className="manga-title-container">
                    <div className="manga-cover" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%),url(http://localhost:3000/${manga.cover})`}}>
                        <h1>{manga.title}</h1>
                    </div>
                    <div className="manga-description">
                        <h3>Description</h3>
                        <p>{manga.description}</p>
                    </div>
                    {/* <div className="manga-author">
                        <h3>Author</h3>
                        <p>Author Name</p>
                    </div> */}
                    <div className="manga-content">
                        <h3>Book: </h3>
                        <a target="_blank" href={`http://localhost:3000/${manga.manga}`}>{manga.title}</a>
                    </div>
                </div>)}
            </div>
        </div>
    )
}