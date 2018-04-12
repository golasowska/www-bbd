import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "../containers/Navigation";
import Features from "../containers/Features";
import Products from "../containers/Products";
import Home from "../containers/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/features" component={Features} />
            <Route path="/products" component={Products} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
