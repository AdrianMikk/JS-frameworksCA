import { Link } from 'react-router-dom'; 
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../components/Navigation/Header/Header';
import { create } from 'zustand'; 

export const useShoppingCartStore = create((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      console.log("Current Cart State:", state.cart);
      console.log("Adding Product:", product);
      
      const existingItemIndex = state.cart.findIndex((item) => item.id === product.id);

      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + 1,
        };
        console.log("Updating Cart with Existing Item:", updatedCart);
        return { cart: updatedCart };
      } else {
        console.log("Adding New Item to Cart:", { ...product, quantity: 1 });
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
      }
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),
  incrementQuantity: (productId) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),
  decrementQuantity: (productId) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    })),
}));

function calculateTotalPrice(cart) {
  return cart.reduce((total, item) => total + (item.discountedPrice ? item.discountedPrice : item.price) * item.quantity, 0);
}

function formatPrice(price) {
  const roundedPrice = Number(price).toFixed(2);
  return `$${roundedPrice}`;
}

function ShoppingCart() {
  const cart = useShoppingCartStore((state) => state.cart || []);
  const addToCart = useShoppingCartStore((state) => state.addToCart);
  const removeFromCart = useShoppingCartStore((state) => state.removeFromCart);
  const incrementQuantity = useShoppingCartStore((state) => state.incrementQuantity);
  const decrementQuantity = useShoppingCartStore((state) => state.decrementQuantity);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    storedCart.forEach(item => addToCart(item)); 
  }, [addToCart]);  

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cart)); 
  }, [cart]);

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
              <span className="item-price">{data.discountedPrice ? formatPrice(data.discountedPrice) : formatPrice(data.price)}</span>
              <div className="quantity-container">
                <button className="quantity-button" onClick={() => decrementQuantity(data.id)}>-</button>
                <span className="item-quantity">{data.quantity}</span>
                <button className="quantity-button" onClick={() => incrementQuantity(data.id)}>+</button>
              </div>
              {data.image && <img src={data.image.url} className='cart-image' alt={data.title} />} 
              <button className="remove-button" onClick={() => removeFromCart(data.id)}>Remove</button>
            </div>
            <span className="item-total">Total: {formatPrice(data.discountedPrice ? data.discountedPrice * data.quantity : data.price * data.quantity)}</span>
          </li>
        ))}
      </ul>

      <div>Total: {formatPrice(calculateTotalPrice(cart))}</div>

      <Link to="/checkout" className="checkout-button">Complete Order</Link>
    </div>
  );
}

export default ShoppingCart;













