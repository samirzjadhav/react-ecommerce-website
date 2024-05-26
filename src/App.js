import Header from "./Common/Header/Header";
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
          <Route path="/" exact></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
