import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import SearchFunction from "../../Search";
import Store from "../../Shop";
import Hamburger from "hamburger-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const itemCount = Store((state) => state.cart);
  const totalItems = itemCount.reduce((acc, item) => acc + item.quantity, 0);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
            <button className="burger-button" onClick={toggleMenu}>
        <Hamburger color={isOpen ? "black" : "white"} />
      </button>
      <div className={isOpen ? "menu open" : "menu"}>
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
    </div>
  );
};

export default Navbar;
