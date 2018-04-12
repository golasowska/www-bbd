import React, { Component } from "react";

import Navigation from "./Navigation";
import Footer from "./Footer";

export default class Features extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <h2>Features</h2>
        <Footer />
      </div>
    );
  }
}
