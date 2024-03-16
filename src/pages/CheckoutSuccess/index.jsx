import { Link } from 'react-router-dom'; 
import Navbar from '../../components/Navigation/Header/Header';

function Checkout() {
  return (
    <div className="checkout-container">
        <Navbar />
      <h1>Order Completed!</h1>
      <p>Your order summary:</p>
      {/* <h2>Checkout Success!</h2> */}
      <Link to="../Products/index.jsx" className="continue-shopping-button">Continue Shopping</Link>
    </div>
  );
}

export default Checkout;
