import mangaCover from  "./assets/manga-cover.png"

export default function Manga() {
    return(
        <div className="manga-profile">
            <div className="manga-container">
                <div className="manga-title-container">
                    <div className="manga-cover" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%),url(${mangaCover})`}}>
                        <h1>Manga Name</h1>
                    </div>
                    <div className="manga-description">
                        <h3>Description</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quod impedit aspernatur quasi temporibus beatae dolorum asperiores ex autem aliquid consectetur facere officiis repellendus ut, optio deserunt quidem error nihil!</p>
                    </div>
                    <div className="manga-author">
                        <h3>Author</h3>
                        <p>Author Name</p>
                    </div>
                    <div className="manga-content">
                        <h3>Book: </h3>
                        <a href="#">Manga Title</a>
                    </div>
                </div>
            </div>
        </div>
    )
}