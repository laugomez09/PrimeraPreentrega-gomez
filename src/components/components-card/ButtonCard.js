import "../components-card/card.css"
import { useContext } from "react";
import {listCartContext}  from "./providerContextCart"


const ButtonCard = ({id}) => {
let {addProduct} = useContext(listCartContext)

const handlerClick = () => {
    addProduct(id)
}

        return (
        <button id="agregar" className="btn btn-primary" onClick={handlerClick}>Agregar a carrito</button>
    )
}

export default ButtonCard;