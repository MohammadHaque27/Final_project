import Home from "./Home";
import Header from "./Header";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/login">
          <Login> </Login>
          </Route>
          <Route path="/checkout">
            <Header />
            <h1>Checkout</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home />
            {/* <h1>HomePage!!!</h1> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
