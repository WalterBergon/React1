import { useCart } from '../../context/CartContext'; // Importa el contexto
import './Cart.css';

function Cart() {
    const { cart, removeFromCart } = useCart(); // Obtiene el carrito y la función para eliminar

    const total = cart.reduce((sum, item) => sum + (item.precio * item.quantity), 0);

    return (
        <div className="cart-view">
            <h2>Tu Carrito</h2>
            {cart.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <>
                    {cart.map(item => (
                        <div key={item.id} className="cart-item">
                            <h3>{item.nombre}</h3>
                            <p>Cantidad: {item.quantity}</p>
                            <p>Subtotal: ${item.precio * item.quantity}</p>
                            <button
                                className="remove-btn"
                                onClick={() => removeFromCart(item.id)} // Elimina el producto
                            >
                                Eliminar
                            </button>
                        </div>
                    ))}
                    <h3>Total: ${total}</h3>
                </>
            )}
        </div>
    );
}

export default Cart;