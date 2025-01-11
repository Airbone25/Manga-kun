import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function SearchBar(){
    const [query, setQuery] = useState("")
    const [result,setResult] = useState()

    async function fetchManga(value){
        const res = await fetch(`${import.meta.env.VITE_URL}/api`)
        const data = await res.json()
        const resultData = data.filter(manga=>value && manga && manga.title && manga.title.toLowerCase().includes(value))
        setResult(resultData)
    }

    function handleSearch(value){
        setQuery(value)
        fetchManga(value)
    }

    return(
        <div>
            <input type="search" name="search" id="search" placeholder="Search Manga" value={query} onChange={(e)=>handleSearch(e.target.value)} autoComplete="off"/>
            <ul className="search-list">
                {result && result.map((manga,index)=><li key={index}><Link style={{"textDecoration": "none","color": "black"}} to={`/${manga._id}`}>{manga.title}</Link></li>)}
            </ul>
        </div>
    )
}

export default SearchBar