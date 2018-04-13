import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Checkout from "./components/Checkout";
import store from "./stores/mainStore";

window.store = store;

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Menu} path="/menu" />
          <Route component={Checkout} path="/checkout" />
        </Switch>
      </div>
    );
  }
}

export default App;
