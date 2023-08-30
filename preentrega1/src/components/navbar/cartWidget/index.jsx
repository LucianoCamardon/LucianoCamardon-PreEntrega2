import cart from "../../../assets/icons/cart.png"
import "./styles.css"

function CartWidget () {
    return (
        <div className="cart">
            <img src={cart} alt="cart" className="cart-icon"/>
            <p>2</p>
        </div>
    )
}

export default CartWidget