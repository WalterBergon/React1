import ItemCard from '../ItemCard/ItemCard';
import './ItemListContainer.css';
//entra en mensaje
function ItemListContainer({ mensaje }) {
    return (
        <div className='container-cards'>
            <h2 className="mensaje">{mensaje}</h2>
            <div className="productos">
                <ItemCard nombre={"Producto 1"} precio={100} />
                <ItemCard nombre={"Producto 2"} precio={200} />
                <ItemCard />
            </div>
        </div>
    )
}

export default ItemListContainer;