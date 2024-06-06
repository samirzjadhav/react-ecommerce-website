import Header from "./Common/Header/Header";
import Pages from "./Pages/Pages.js";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Pages />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
