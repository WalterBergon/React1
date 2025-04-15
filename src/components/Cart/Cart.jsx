import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

function Cart() {
    const { cart, removeFromCart } = useCart();
    const navigate = useNavigate();

    const total = cart.reduce((sum, item) => sum + (item.precio * item.quantity), 0);

    const handleCheckout = () => {
        navigate('/checkout');
    };

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
                                onClick={() => removeFromCart(item.id)}
                            >
                                Eliminar
                            </button>
                        </div>
                    ))}
                    <h3>Total: ${total}</h3>
                    <button className="checkout-btn" onClick={handleCheckout}>
                        Finalizar compra
                    </button>
                </>
            )}
        </div>
    );
}

export default Cart;
