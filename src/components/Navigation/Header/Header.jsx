import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import SearchFunction from "../../Search";
import Store from "../../Shop";

// Import your store or context if needed

const Navbar = () => {
  const itemCount = Store((state) => state.cart.length);

  return (
    <div>
      <nav className="navbar">
        <ul className="header-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <SearchFunction />
        <div className="cart-icon">
          <Link to="/cart">
            <FaShoppingCart />
            {itemCount > 0 && <span className="cart-counter">{itemCount}</span>}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
