import "../../styles/containerCart.css";
import close from "../../img/close.svg";
import ItemCart from "./ItemCart";
import clear from "../../img/clear.svg";
import { useContext } from "react";
import { controllerShowCart } from "./ContextCart";
import { listCartContext } from "../components-card/providerContextCart";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ContainerCart = () => {

    const { cartShow, setCartShow } = useContext(controllerShowCart);
    const { listCart, clearCart } = useContext(listCartContext);

    const style = {
        display: cartShow
    }

    const handleVaciar = () => {
        const Toast = Swal.mixin({
            toast: true,
            background: '#328a00ef',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: false,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: 'Has vaciado tu carrito'
        })
        clearCart();
    }

    const closeCart = () => {
        setCartShow((cartShow === "none") ? "flex" : "none")

    }

    const calculateTotalPrice = () => {
        return listCart.reduce((total, product) => total + product.price, 0);
    };

    return (

        <div className="cart" style={style} >
            <div className="cerrar">
                <button className="close" onClick={closeCart}>
                    <img src={close}></img>
                </button>
            </div>

            <div className="containerItemsCart">
                {
                    (listCart.length === 0) ? <span className="emptyCart">Tu carrito esta vacio.</span>
                        : listCart.map(producto => (
                            <ItemCart
                                key={producto.id}
                                id={producto.id}
                                title={producto.title}
                                image={producto.imageProduct.firtsImage}
                                quantity={producto.quantity}
                                price={producto.price}
                            />
                        ))
                }
            </div>

            <div className="CajaDelPrecio">
                <p className="preciototal">Precio total: ${calculateTotalPrice()}</p>
            </div>

            <div className="TerminarCompra">

                <Link to="/checkout">
                    <button className="terminar">Ir al pago</button>
                </Link>

                <button className="clear" onClick={handleVaciar}>
                    <img src={clear}></img>
                </button>
            </div>
        </div>

    )
}

export default ContainerCart