import CardImage from "./CardImage";
import CardDescription from "./CardDescription";
import ButtonCard from "./ButtonCard";
import ButtonDetalles from "./ButtonDetalles";
import "../components-card/card.css"
import { Link } from "react-router-dom";

const CardItem = (props) => {
    return (
        <div className="card">
            <CardImage
                image={props.image}
                alt={props.alt}
            />
            <CardDescription
                titulo={props.titulo}
                cantidad={props.cantidad}
                precio={props.precio}
            />
            <div className="botones">
                <ButtonCard />
                <Link to={`/item/${props.id}`}>
                    <ButtonDetalles
                        txt="Ver detalles"
                    />
                </Link>
            </div>
        </div>
    )
}

export default CardItem;