import "./card.css"

function Card({img,key}){
    return(
        <div key={key} className="card">
            <div className="card-img">
                <img src={img} alt="anime" />
            </div>
        </div>
    )
}

export default Card