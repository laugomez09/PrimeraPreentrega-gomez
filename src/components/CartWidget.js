import  CartDiseño  from "./CartDiseño";
import CartItem from "./CartItems";

const CartWidget = () => {
    return (
        <div className=" rounded-circle p-3 position-relative" style={{ cursor: "pointer" }}>
            <CartDiseño color="black" />
            <CartItem count={7} />
        </div>
    );
};

export default CartWidget;