import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import ProductDetails from './ProductDetails';
import Cart from './Cart';

function ParentComponent() {
  const [cartItemCount, setCartItemCount] = useState(0);

  // Function to update cart item count
  const updateCartItemCount = (count) => {
    setCartItemCount(count);
  };

  return (
    <Router>
      <Navbar cartItemCount={cartItemCount} />
      <Switch>
        <Route exact path="/" component={ProductDetails} />
        <Route path="/product/:id" render={(props) => <ProductDetails {...props} updateCartItemCount={updateCartItemCount} />} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}

export default ParentComponent;

