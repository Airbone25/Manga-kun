import Card from "./Card"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from 'react'

function Home(){

    const [manga, setManga] = useState()

    useEffect(()=>{getMangas()},[])

    async function getMangas(){
        const res = await fetch('http://localhost:3000/api')
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
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam repellendus rem quod in. Qui consequatur aperiam officia quibusdam odit sapiente, cum voluptatibus obcaecati, perspiciatis in, id eius quisquam saepe amet?</p>
                </div>
                <div className="why">
                    <h1>Why Manga-kun?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure pariatur doloremque consequuntur enim ipsa repudiandae cumque soluta provident! Facere sunt quo beatae corporis dolorum velit perferendis esse repellendus voluptas rem.</p>
                </div>
            </div>

            <h2 id="heading-popular-mangas">Popular Mangas</h2>
            <div className="popular-mangas">
                {manga && manga.map((manga,index)=><Card key={index} img={`http://localhost:3000/${manga.cover}`}/>)}
                
            </div>

            <footer>
                <div className="credits">
                    <p>Made by Airbone25</p>
                </div>
                <div className="icons">
                    <a href="#"><FontAwesomeIcon icon={faGithub} style={{height: "30px"}}/></a>
                </div>
            </footer>
        </div>
    )
}

export default Home