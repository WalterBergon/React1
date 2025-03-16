import { Link } from 'react-router-dom'; // Para "Ver Detalle"
import { useCart } from '../../context/CartContext'; // Para el carrito
import './ItemCard.css';

function ItemCard({ id, nombre, precio }) {
    const { addToCart } = useCart(); // Función para añadir al carrito

    return (
        <div className='card'>
            <h2>{nombre || "No Hay Che"}</h2>
            <h3>${precio || "No Precio"}</h3>
            <button
                className='card-btn'
                onClick={() => addToCart({ id, nombre, precio })} // Añade al carrito
            >
                Agregar al carrito
            </button>
            <Link to={`/item/${id}`} className="detail-link">Ver Detalle</Link> {/* Enlace al detalle */}
        </div>
    );
}

export default ItemCard;