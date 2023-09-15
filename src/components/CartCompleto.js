import  CartWidget  from "./CartWidget";
import CartItem from "./CartItems";

const CartCompleto = () => {
    return (
        <div className=" rounded-circle p-3 position-relative" style={{ cursor: "pointer" }}>
            <CartWidget color="black" />
            <CartItem count={7} />
        </div>
    );
};

export default CartCompleto;