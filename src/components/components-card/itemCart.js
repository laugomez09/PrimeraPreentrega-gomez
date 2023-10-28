import "../../styles/itemCart.css"
import { useContext } from "react"
import { listCartContext } from "../components item/providerContextoListCart"



const ItemCart = ({ id, title, image, price, quantity }) => {

    const { removeFromCart } = useContext(listCartContext)

    return (
        <div className="itemCart">

            <div className="img">
                <img src={image}></img>
            </div>

            <div className="description-cantidad">
                <span className="title">{title}</span>
                <span className="quantity">{`cantidad: ${quantity}`}</span>
            </div>

            <div className="price">
                <span className="subtotal">Subtotal</span>
                <span className="price">${price * quantity}</span>
            </div>

            <button className="delete" onClick={() => removeFromCart(id)}>
                <img src="http://www.w3.org/2000/svg"></img>
            </button>
        </div>
    )
}

export default ItemCart