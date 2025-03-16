import { useCart } from '../../context/CartContext'; // Importa el contexto
import { TiShoppingCart } from "react-icons/ti";
import './CartWidget.css';

function CartWidget() {
    const { totalItems } = useCart(); // Obtiene la cantidad de productos

    return (
        <div className="cart-widget">
            <TiShoppingCart size={25} color="White" />
            <span className="cart-count">{totalItems}</span> {/* Muestra la cantidad */}
        </div>
    );
}

export default CartWidget;