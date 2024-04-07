import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navigation/Header/Header";
// import store from "../../store";
import Store from "../../components/Shop";
import { Link } from "react-router-dom";

// export const useShoppingCartStore = create((set) => ({
//   cart: [],
//   addToCart: (product) =>
//     set((state) => ({
//       cart: state.cart.some((item) => item.id === product.id)
//         ? state.cart.map((item) =>
//             item.id === product.id
//               ? { ...item, quantity: item.quantity + 1 }
//               : item
//           )
//         : [...state.cart, { ...product, quantity: 1 }],
//     })),
//   removeFromCart: (productId) =>
//     set((state) => ({
//       cart: state.cart.filter((item) => item.id !== productId),
//     })),
//   incrementQuantity: (productId) =>
//     set((state) => ({
//       cart: state.cart.map((item) =>
//         item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
//       ),
//     })),
//   decrementQuantity: (productId) =>
//     set((state) => ({
//       cart: state.cart.map((item) =>
//         item.id === productId && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       ),
//     })),
// }));

// function calculateTotalPrice(cart) {
//   return cart.reduce((total, item) => total + item.price * item.quantity, 0);
// }

// function ShoppingCart() {
//   const cart = useShoppingCartStore((state) => state.cart || []);
//   const addToCart = useShoppingCartStore((state) => state.addToCart);
//   const removeFromCart = useShoppingCartStore((state) => state.removeFromCart);
//   // const incrementQuantity = useShoppingCartStore(
//   //   (state) => state.incrementQuantity
//   // );
//   // const decrementQuantity = useShoppingCartStore(
//   //   (state) => state.decrementQuantity
//   // );

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
//     addToCart(storedCart);
//   }, [addToCart]);

//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cart));
//   }, [cart]);

const ShoppingCart = () => {
  // Accessing the store state and actions correctly
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } = Store(
    (state) => ({
      cart: state.cart || [],
      removeFromCart: state.removeFromCart,
      incrementQuantity: state.incrementQuantity,
      decrementQuantity: state.decrementQuantity,
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
    </div>
  );
};

export default ShoppingCart;
