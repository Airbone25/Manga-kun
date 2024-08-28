import Card from "./Card"
import img from "./assets/card-girl.png"

function Home(){
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
                <Card img={img}/>
                <Card img={img}/>
                <Card img={img}/>
                <Card img={img}/>
                <Card img={img}/>
                <Card img={img}/>
                <Card img={img}/>
                <Card img={img}/>
                <Card img={img}/>
            </div>
        </div>
    )
}

export default Home