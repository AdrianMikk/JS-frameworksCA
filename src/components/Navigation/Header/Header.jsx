import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import SearchFunction from "../../Search";
import Store from "../../Shop";

// Import your store or context if needed

const Navbar = () => {
  const itemCount = Store((state) => state.cart);
  const totalItems = itemCount.reduce((acc, item) => acc + item.quantity, 0);

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
            {totalItems > 0 && (
              <span className="cart-counter">{totalItems}</span>
            )}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
