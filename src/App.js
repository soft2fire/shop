import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './Component/NavBar'
import Shop from "./Component/Shop/Shop";
import Home from "./Component/Home";
import Cart from "./Component/Cart";
import { CartProvider } from "./Component/CartContext"
import Details from './Component/Shop/Details';

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route path="/Cart" component={Cart} />
          <Route
            path='/shop/:id'
            component={Details}
          />
        </Switch>
      </Router>
    </CartProvider>
  );
}

export default App;