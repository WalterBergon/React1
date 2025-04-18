import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCard from '../ItemCard/ItemCard';
import { getProducts } from "../../utils/firebaseService";
import './ItemListContainer.css';

function ItemListContainer({ greeting }) {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        getProducts(categoryId).then((data) => setProducts(data));
    }, [categoryId]);

    return (
        <div className='container-cards'>
            <h2 className="mensaje">{greeting}</h2>
            <div className="productos">
                {products.map((product) => (
                    <ItemCard
                        key={product.id}
                        id={product.id}
                        nombre={product.nombre}
                        precio={product.precio}
                        img={product.img}
                        stock={product.stock}  // Asegurá pasar el stock
                    />
                ))}
            </div>
        </div>
    );
}

export default ItemListContainer;