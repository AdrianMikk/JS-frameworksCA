import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import SearchFunction from '../../Search';
import { useShoppingCartStore } from '../../../pages/Cart/index';

const Navbar = () => {
  const cart = useShoppingCartStore((state) => state.cart || []);

  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <div>
        <nav className="navbar">
          <ul className="header-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <SearchFunction />
          <div className="cart-icon">
            <Link to="/cart">
              <FaShoppingCart />
              {totalCartItems > 0 && <div className='cart-count'>{totalCartItems}</div>}
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;





