import './ItemCard.css';

function ItemCard(props) {

    const { nombre, precio } = props; //es el destructurin de props y te toma todo poniendo nomnre y precio
    //Tambien se puede hacer en la función: function ItemCard({nombre, precio}) {} esta recibiendo un objeto.
    function agregarCarrito() {
        console.log("Agregando", nombre);
    }

    return (
        <div className='card'>
            <h2>{nombre || "No Hay Che"}</h2>
            <h3>{precio || "No Precio"}</h3>
            <button disabled={!nombre} className='card-btn' onClick={() => agregarCarrito()}>agregar al Carrto</button>
        </div> //disabled={!nombre} hace que este desabilitado el boton si no hay nombre o sea producto.
    )
}

export default ItemCard;