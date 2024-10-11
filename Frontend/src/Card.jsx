
function Card({img}){
    return(
        <div className="card">
            <div className="card-img">
                <img src={img} alt="cardimg" />
            </div>
        </div>
    )
}

export default Card