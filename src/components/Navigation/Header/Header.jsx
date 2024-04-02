import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import SearchFunction from '../../Search';

const Navbar = () => {
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
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;




