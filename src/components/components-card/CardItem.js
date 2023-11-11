import "../../styles/cardItem.css"
import CardImage from "./CardImage";
import Description from "./Description";
import ButtonDetalles from "./Buttondetalles";
import ButttonAddCart from "./ButtonAddCart";
import { Link } from "react-router-dom";
import cart from "../../img/cart-white.svg"

const CardItem = (props) => {
    return (
        <div className="cardItem">
            <CardImage
                imagen={props.imagen}
                alt={props.alt}
            />
            <Description
                title={props.title}
                cantidad={props.cantidad}
                descripcion={props.parrafo}
                precio={props.precio}
            />
            <div className="buttons">
                <Link to={`/item/${props.id}`}>
                    <ButtonDetalles
                        txt="Ver detalles"
                    />
                </Link>

                <ButttonAddCart
                    id={props.id}
                    svg={cart}
                />
            </div>
        </div>
    )
}

export default CardItem;