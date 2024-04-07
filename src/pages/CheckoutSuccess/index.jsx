import { Link } from "react-router-dom";
import Navbar from "../../components/Navigation/Header/Header";
import Store from "../../components/Shop";
import { useEffect } from "react";
import { useMemo } from "react";

function Checkout() {
  // Accessing the store state and actions correctly
  const { cart, clearCart } = Store(
    (state) => ({
      cart: state.cart || [],
      removeFromCart: state.removeFromCart,
      incrementQuantity: state.incrementQuantity,
      decrementQuantity: state.decrementQuantity,
      clearCart: state.clearCart,
    })
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedCart = useMemo(() => cart, []); // Memoize cart to save value before clearCart

  function calculateTotalPrice(cart) {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  const formatPrice = (price) => {
    const roundedPrice = Number(price).toFixed(2);
    return `$${roundedPrice}`;
  };

  useEffect(() => {
    clearCart();
  }, []); // Clear cart on component mount

  
  return (
    <div className="checkout-container">
      <Navbar />
      <h1>Order Completed!</h1>
      <p>Your order summary:</p>
      <ul className="order-summary">
        {memoizedCart.map((item) => (
          <li key={item.id}>
            <span>{item.title}</span>
            <span> Quantity: {item.quantity}</span>
            <span> Total:{" "}
              {formatPrice(
                item.discountedPrice
                  ? item.discountedPrice * item.quantity
                  : item.price * item.quantity
              )}
            </span>
          </li>
        ))}
      </ul>
      <div>Total: {formatPrice(calculateTotalPrice(memoizedCart))}</div>
      <Link to="/" className="continue-shopping-button">
        Continue Shopping
      </Link>
    </div>
  );
}

export default Checkout;
