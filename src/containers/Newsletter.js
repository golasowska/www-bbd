import React, { Component } from "react";

import Navigation from "./Navigation";
import Footer from "./Footer";

import logo_white from "../assets/images/bbod_white.svg";

export default class Newsletter extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <h2>Newsletter</h2>
        <Footer bgColor="#00468e" fontColor="#fff" logo={logo_white} />
      </div>
    );
  }
}
