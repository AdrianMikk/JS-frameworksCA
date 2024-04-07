import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navigation/Header/Header";
// import store from "../../store";
import Store from "../../components/Shop";

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
      <ul>
        {cart.map(
          (item) => (
            console.log(item),
            (
              <li key={item.id}>
                <span>{item.name}</span>
                {/* <button onClick={() => incrementQuantity(item.id)}>+</button> */}
                {/* <span>{item.quantity}</span> */}
                {/* <button onClick={() => decrementQuantity(item.id)}>-</button> */}
                <span>${item.price * item.quantity}</span>
                <div>Quantity: {item.quantity}</div>
                <img src={item.image.url} alt={item.name} />
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            )
          )
        )}
      </ul>
      <div>Total: ${calculateTotalPrice(cart)}</div>
    </div>
  );
};

export default ShoppingCart;
