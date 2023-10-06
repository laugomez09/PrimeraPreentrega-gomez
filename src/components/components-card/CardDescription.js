import "../components-card/card.css"

const CardDescription = (props) => {
    return (
        <div className="card-body">
            <h3 className="card-title">{props.titulo}
            </h3>
            <p className="card-text">Descripcion:{props.decription}
            </p>
            <p>
                Cantidad: {props.cantidad}
            </p>
            <h4>${props.precio}</h4>
        </div>
    )
}

export default CardDescription;