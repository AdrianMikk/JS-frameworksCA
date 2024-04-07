import { Helmet } from "react-helmet";
import Navbar from "../../components/Navigation/Header/Header";
import Store from "../../components/Shop";
import { Link } from "react-router-dom";


const ShoppingCart = () => {
  // Accessing the store state and actions correctly
  const { cart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } = Store(
    (state) => ({
      cart: state.cart || [],
      removeFromCart: state.removeFromCart,
      incrementQuantity: state.incrementQuantity,
      decrementQuantity: state.decrementQuantity,
      clearCart: state.clearCart,
    })
  );

  // Calculate total price
  function calculateTotalPrice(cart) {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  return (
    <div className="shopping-cart">
      <Navbar />
      <Helmet>
        <title>Shopping Cart</title>
      </Helmet>
      <h1>Shopping Cart</h1>
      <ul className="cart-list">
        {cart.map((data) => (
          <li key={data.id} className="cart-item">
            <span className="item-name">{data.title}</span>
            <div className="item-details">
              <div className="quantity-container">
                <button
                  className="quantity-button"
                  onClick={() => decrementQuantity(data.id)}
                >
                  -
                </button>
                <span className="item-quantity">{data.quantity}</span>
                <button
                  className="quantity-button"
                  onClick={() => incrementQuantity(data.id)}
                >
                  +
                </button>
              </div>
              {data.image && (
                <img
                  src={data.image.url}
                  className="cart-image"
                  alt={data.title}
                />
              )}
              <button
                className="remove-button"
                onClick={() => removeFromCart(data.id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div>Total: {calculateTotalPrice(cart)}</div>

      <Link to="/checkout" className="checkout-button">
        Complete Order
      </Link>
              <button className="clear-button" onClick={() => clearCart()}>
                Clear Cart
              </button>
    </div>
  );
};

export default ShoppingCart;
