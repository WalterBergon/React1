import CartWidget from '../CartWidget/CartWidget'; //importo el carrito y lo llamo en el nav
import './Navbar.css';

function Navbar() {
    return (
        <header>
            <nav className='nav-bar'>
                <p>Logo</p>
                <ul className='nav-bar-ul'>
                    <li className="nav-bar-li">Home</li>
                    <li className="nav-bar-li">Productos</li>
                    <li className="nav-bar-li">Contacto</li>
                </ul>
                <CartWidget />   //lo llamo del nav
            </nav>
        </header>
    )
}

export default Navbar;