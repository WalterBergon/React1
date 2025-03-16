import { useState } from 'react';
import './ItemCount.css';

function ItemCount({ stock, initial = 1, onAdd }) {
    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        if (count < stock) setCount(count + 1);
    };

    const handleSubtract = () => {
        if (count > 1) setCount(count - 1);
    };

    return (
        <div className="item-count">
            <div className="count-controls">
                <button onClick={handleSubtract}>-</button>
                <span>{count}</span>
                <button onClick={handleAdd}>+</button>
            </div>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;