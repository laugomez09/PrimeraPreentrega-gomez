const CartItem = ({ count = 0 }) => {
    return (
        <div
            className="position-absolute bg-primary rounded-circle px-2 "
            style={{ top: 0, right: 0 }}
        >
            <span className="iconos">{count}</span>
        </div>
    );
};

export default CartItem;