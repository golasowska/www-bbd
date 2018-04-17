import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Features from "../containers/Features";
import Products from "../containers/Products";
import Home from "../containers/Home";
import AboutUs from "../containers/AboutUs";
import Contact from "../containers/Contact";
import Newsletter from "../containers/Newsletter";
import MigrateTokens from "./MigrateTokens";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/features" component={Features} />
            <Route path="/products" component={Products} />
            <Route path="/about" component={AboutUs} />
            <Route path="/contact" component={Contact} />
            <Route path="/newsletter" component={Newsletter} />
            <Route path="/migrate-tokens" component={MigrateTokens} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
