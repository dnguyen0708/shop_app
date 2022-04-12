import '../styles/nav.css'
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'
const Nav = ({ items }) => {
    return (
        <nav className="navbar">
            <Link to="/">
                <div className="logo">HOME</div>
            </Link>
            <ul className='nav-links'>
                <Link to="/shop">
                    <li>SHOP</li>
                </Link>
                <Link to="/cart">
                    <li><p data-testid="indicator" className='indicator'>{items}</p><FaShoppingCart />CART</li>
                </Link>

            </ul>
        </nav>
    )
}

export default Nav;