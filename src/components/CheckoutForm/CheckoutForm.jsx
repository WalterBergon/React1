import { updateProductStock, validateCartStock } from '../../utils/firebaseService';
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validamos el stock antes de proceder
        const validation = await validateCartStock(cart);
        if (!validation.success) {
            // Si falla, muestra un mensaje al usuario
            alert(
                validation.error
                    ? validation.error
                    : `Stock insuficiente para ${validation.productName}. Stock disponible: ${validation.availableStock}. Cantidad solicitada: ${validation.requested}.`
            );
            return;
        }

        // Simulación de generación de orden
        const ordenId = `ORD-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
        setOrdenGenerada(ordenId);

        const handleSubmit = async (e) => {
            e.preventDefault();

            // Validamos el stock antes de proceder
            const validation = await validateCartStock(cart);
            if (!validation.success) {
                // Si falla, muestra un mensaje al usuario
                alert(
                    validation.error
                        ? validation.error
                        : `Stock insuficiente para ${validation.productName}. Stock disponible: ${validation.availableStock}. Cantidad solicitada: ${validation.requested}.`
                );
                return;
            }

            // Simulación de generación de orden
            const ordenId = `ORD-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
            setOrdenGenerada(ordenId);

            try {
                // Recorrer cada producto en el carrito para actualizar el stock
                for (const item of cart) {
                    const result = await updateProductStock(item.id, item.quantity);
                    if (!result.success) {
                        // Si falla alguna actualización, mostramos el error y detenemos el proceso
                        console.error(`Error actualizando stock para ${item.nombre}: ${result.error}`);
                        // Opcional: podés avisar al usuario y abortar la orden.
                        return;
                    }
                }
            } catch (error) {
                console.error("Error actualizando stock:", error);
                return;
            }

            // Limpiar el carrito después de actualizar el stock
            clearCart();
        };


        // Limpiar el carrito
        clearCart();
    };

    if (ordenGenerada) {
        return (
            <div className="checkout-final">
                <h2>Gracias por tu compra, estimado ser Consumista.</h2>
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
