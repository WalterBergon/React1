import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/imagenes/logowilyx.png';
import './Navbar.css';

function Navbar() {
    return (
        <header>
            <nav className='nav-bar'>
                {/* Logo sin enlace */}
                <img
                    src={logo}
                    alt="Logo de la tienda"
                    className="logo-img"
                />
                <ul className='nav-bar-ul'>
                    <li className="nav-bar-li">
                        <Link to="/">Todos los productos</Link> {/* Enlace a la página principal */}
                    </li>
                    <li className="nav-bar-li">
                        <Link to="/category/instrumentos">Instrumentos</Link> {/* Enlace a instrumentos */}
                    </li>
                    <li className="nav-bar-li">
                        <Link to="/category/electronica">Electrónica</Link> {/* Enlace a electrónica */}
                    </li>
                    <li className="nav-bar-li">
                        <Link to="/category/accesorios">Accesorios</Link> {/* Enlace a accesorios */}
                    </li> {/* Aquí faltaba cerrar el <li> */}
                </ul>
                {/* Enlace al carrito */}
                <Link to="/cart">
                    <CartWidget />
                </Link>
            </nav>
        </header>
    );
}

export default Navbar;