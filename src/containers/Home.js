import React, { Component } from "react";

import Navigation from "./Navigation";
import Footer from "./Footer";

import logo_blue from "../assets/images/bbod_no_tagline.svg";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <h2>Home</h2>
        <Footer bgColor="null" fontColor="null" logo={logo_blue} />
      </div>
    );
  }
}
