
function Card({img}){
    return(
        <div className="card">
            <div className="card-img">
                <img src={img} alt="cardimg" />
            </div>
            <h5>Manga</h5>
        </div>
    )
}

export default Card