import React, { Component } from "react";
import { Route, Switch, Router } from "react-router-dom";
import { history } from "../store/configureStore";

import Features from "../containers/Features";
import Products from "../containers/Products";
import Home from "../containers/Home";
import AboutUs from "../containers/AboutUs";
import News from "../containers/News";
import Contact from "../containers/Contact";
import Newsletter from "../containers/Newsletter";
import MigrateTokens from "./MigrateTokens";

import ReactGA from "react-ga";
ReactGA.initialize("UA-106410895");

class App extends Component {
  render() {
    return (
      <Router
        history={history}
        onUpdate={fireTracking => {
          ReactGA.pageview(window.location.hash);
        }}
      >
        <div>
          <Route component={ScrollToTop} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path={`${process.env.PUBLIC_URL}/features`}
              component={Features}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/products`}
              component={Products}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/about`}
              component={AboutUs}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/contact`}
              component={Contact}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/newsletter`}
              component={Newsletter}
            />
            <Route path={`${process.env.PUBLIC_URL}/news`} component={News} />
            <Route
              path={`${process.env.PUBLIC_URL}/migrate-tokens`}
              component={MigrateTokens}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

export default App;
