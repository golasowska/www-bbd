import React, { Component } from "react";
import { Route, Switch, Router } from "react-router-dom";
import { history } from "../store/configureStore";

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
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/features" component={Features} />
            <Route path="/products" component={Products} />
            <Route path="/about" component={AboutUs} />
            <Route path="/contact" component={Contact} />
            <Route path="/newsletter" component={Newsletter} />
            <Route path="/migrate-tokens" component={MigrateTokens} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
