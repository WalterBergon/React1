import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import './CheckoutForm.css';

function CheckoutForm() {
    const { cart, clearCart } = useCart();

    const [form, setForm] = useState({
        nombre: '',
        email: '',
        telefono: ''
    });

    const [ordenGenerada, setOrdenGenerada] = useState(null);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulación de generación de orden
        const ordenId = `ORD-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
        setOrdenGenerada(ordenId);

        // Limpiar el carrito
        clearCart();
    };

    if (ordenGenerada) {
        return (
            <div className="checkout-final">
                <h2>Gracias por tu compra, estimado ser consumista.</h2>
                <p>Tu número de orden es: <strong>{ordenGenerada}</strong></p>
            </div>
        );
    }

    return (
        <div className="checkout-form">
            <h2>Finalizar Compra</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input type="text" name="nombre" value={form.nombre} onChange={handleChange} required />
                </label>

                <label>
                    Correo Electrónico:
                    <input type="email" name="email" value={form.email} onChange={handleChange} required />
                </label>

                <label>
                    Teléfono:
                    <input type="tel" name="telefono" value={form.telefono} onChange={handleChange} required />
                </label>

                <button type="submit" className="checkout-btn">Comprar</button>
            </form>
        </div>
    );
}

export default CheckoutForm;
