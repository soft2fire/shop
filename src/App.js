import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './Component/NavBar'
import Shop from "./Component/Shop/Shop";
import Home from "./Component/Home";
import Cart from "./Component/Cart";
import { ItemsContext, Provider } from "./Component/ItemsContext"
import ProductItem from './Component/Shop/ProductItem';


function App() {
 
  return (
    <Provider>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route path="/Cart" component={Cart} />
          <Route
            path='/shop/:id'
            render={(props) => <ProductItem {...props} />}
          />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;