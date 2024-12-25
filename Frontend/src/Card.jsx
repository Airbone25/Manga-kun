
function Card({img}){
    return(
        <div className="card">
            <div className="card-img">
                <img src={img} alt="anime" />
            </div>
        </div>
    )
}

export default Card