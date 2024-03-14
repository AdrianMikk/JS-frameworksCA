import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import Contact from "./pages/Contact/index.jsx";
import ProductDetails from "./pages/Specific/index.jsx";
import FaShoppingCart from "./pages/Cart/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/products/:id",
    element: <ProductDetails />,
  },
  {
    path: "/cart",
    element: <FaShoppingCart />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

