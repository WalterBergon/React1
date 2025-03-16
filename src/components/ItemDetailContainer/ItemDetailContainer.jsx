import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail'; // Crea este componente
import { getProductById } from "../../utils/mockData"
import '../ItemDetailContainer/ItemDetailContainer.css';
function ItemDetailContainer() {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        getProductById(itemId).then((data) => setProduct(data));
    }, [itemId]);

    return (
        <div className="item-detail-container">
            {product ? <ItemDetail product={product} /> : <p>Cargando...</p>}
        </div>
    );
}

export default ItemDetailContainer;