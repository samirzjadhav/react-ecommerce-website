import Header from "./Common/Header/Header";
import Pages from "./Pages/Pages.js";
import Cart from "./Cart/Cart.js";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Data from "./Components/FlashDeals/Data.js";
import { useState } from "react";

function App() {
  const { productItems } = Data;

  const [cartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id ? { qty: productExit.qty + 1 } : item
        )
      );
    }
  };

  return (
    <>
      <Router>
        <Header cartItem={cartItem} />
        <Switch>
          <Route path="/" exact>
            <Pages productItems={productItems} addToCart={addToCart} />
          </Route>
          <Route path="/cart" exact>
            <Cart cartItem={cartItem} addToCart={addToCart} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
