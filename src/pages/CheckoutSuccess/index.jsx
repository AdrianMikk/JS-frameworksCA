import { Link } from 'react-router-dom';
import Navbar from '../../components/Navigation/Header/Header';
import { useShoppingCartStore } from '../Cart/index'; 

function Checkout() {
  const cart = useShoppingCartStore((state) => state.cart || []); 
  const calculateTotalPrice = (cart) => {
    return cart.reduce((total, item) => total + (item.discountedPrice ? item.discountedPrice : item.price) * item.quantity, 0);
  };

  const formatPrice = (price) => {
    const roundedPrice = Number(price).toFixed(2);
    return `$${roundedPrice}`;
  };

  return (
    <div className="checkout-container">
      <Navbar />
      <h1>Order Completed!</h1>
      <p>Your order summary:</p>
      <ul className="order-summary">
        {cart.map((item) => (
          <li key={item.id}>
            <span>{item.title}</span>
            <span>Quantity: {item.quantity}</span>
            <span>Total: {formatPrice(item.discountedPrice ? item.discountedPrice * item.quantity : item.price * item.quantity)}</span>
          </li>
        ))}
      </ul>
      <div>Total: {formatPrice(calculateTotalPrice(cart))}</div>
      <Link to="/" className="continue-shopping-button">
        Continue Shopping
      </Link>
    </div>
  );
}

export default Checkout;
