import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import Contact from "./pages/Contact/index.jsx";
import ProductDetails from "./pages/Specific/index.jsx";
import FaShoppingCart from "./pages/Cart/index.jsx";
import Checkout from "./pages/CheckoutSuccess/index.jsx";
import Layout from "./components/Layout/layout.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<FaShoppingCart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;

