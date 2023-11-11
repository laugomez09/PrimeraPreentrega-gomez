import "../../styles/card.css"

const CardImage = (props) => {
    return (
        <img src={props.imagen} className="card-img-top" alt={props.alt}></img>
    )
}

export default CardImage;