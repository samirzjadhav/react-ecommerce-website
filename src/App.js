import Header from "./Common/Header/Header";
import Pages from "./Pages/Pages.js";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom/cjs/react-router-dom.min";
// import Data from "./Components/FlashDeals/Data.js";
import { useState } from "react";

function App() {
  // const { productItems } = Data;

  // const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            {/* <Pages productItems={productItems} /> */}
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
