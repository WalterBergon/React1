import { TiShoppingCart } from "react-icons/ti"; //importo el medelo de carrito, lo pongo en el div
import './CartWidget.css';

function CartWidget() {
    return (
        <div className="cart-widget">
            <TiShoppingCart size={25} color="White" />
            <span className="cart-count">6</span>
        </div>
    );
}

export default CartWidget;