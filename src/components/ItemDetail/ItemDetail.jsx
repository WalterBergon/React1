import { useCart } from '../../context/CartContext'; // Importa el contexto
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

function ItemDetail({ product }) {
    const { addToCart } = useCart(); // Obtiene la función para añadir al carrito

    return (
        <div className="item-detail">
            <h2>{product.nombre}</h2>
            <img src={product.img} alt={product.nombre} />
            <p>{product.descripcion}</p>
            <p>Precio: ${product.precio}</p>
            <ItemCount
                stock={product.stock}
                initial={1}
                onAdd={(count) => addToCart(product, count)} // Añade al carrito con la cantidad
            />
        </div>
    );
}

export default ItemDetail;