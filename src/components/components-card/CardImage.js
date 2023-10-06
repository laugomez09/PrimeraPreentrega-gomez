import "../components-card/card.css"

const CardImage = (props) => {
    return (
        <img src={props.image} className="card-img-top" alt={props.alt}></img>
    )
}

export default CardImage;