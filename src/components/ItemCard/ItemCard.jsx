import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './ItemCard.css';

function ItemCard({ id, nombre, precio, img, stock }) {
    const { addToCart, cart } = useCart(); //  para añadir al carrito

    const productInCart = cart.find(item => item.id === id);
    const quantityInCart = productInCart ? productInCart.quantity : 0;

    const isOutOfStock = quantityInCart >= stock;


    return (
        <div className='card'>
            <img src={img} alt={nombre} className='card-img' />
            <h2>{nombre || "No Hay Che"}</h2>
            <h3>${precio || "No Precio"}</h3>
            <button
                className='card-btn'
                onClick={() => addToCart({ id, nombre, precio, stock })}
                disabled={isOutOfStock}
            >
                {isOutOfStock ? "Sin stock" : "Agregar al carrito"}
            </button>
            <Link to={`/item/${id}`} className="detail-link">Ver el Producto</Link>
        </div>
    );
}

export default ItemCard;