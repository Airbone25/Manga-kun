import Card from "./Card"
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

function Home(){

    const [manga, setManga] = useState()

    useEffect(()=>{getMangas()},[])

    async function getMangas(){
        const res = await fetch(`${import.meta.env.VITE_URL}/api`)
        if(!res.ok){
            throw new Error('Failed to fetch mangas')
        }
        const data = await res.json()
        setManga(data)
    }

    return(
        <div className="home">
            <div className="image-container">
            <div className="big-panel">
                <h2>Read and Create your Manga at Manga-kun</h2>
            </div>
            </div>

            <div className="whatandwhy">
                <div className="what">
                    <h1>What is Manga-kun?</h1>
                    <p>Manga-kun is a platform designed for manga enthusiasts to explore, read, and even create their own manga. Whether you're a seasoned fan or new to the world of manga, Manga-kun offers a space to dive into a vast library of stories, showcase your creativity, and connect with a community that shares your passion.</p>
                </div>
                <div className="why">
                    <h1>Why Manga-kun?</h1>
                    <p>At Manga-kun, we believe in empowering creators and entertaining readers. Our platform stands out because it combines a user-friendly interface, diverse content, and tools to bring your imagination to life. With Manga-kun, you can not only enjoy top-rated mangas but also transform your ideas into reality, making it the ultimate hub for manga lovers.</p>
                </div>
            </div>

            <h2 id="heading-popular-mangas">Recently Uploaded</h2>
            <div className="popular-mangas">
                {manga && manga.map((manga,index)=><Link to={`/${manga._id}`}><Card key={index} img={`${import.meta.env.VITE_URL}/${manga.cover}`}/></Link>)}
            </div>
        </div>
    )
}

export default Home