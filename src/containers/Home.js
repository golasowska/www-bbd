import React, { Component } from "react";

import Navigation from "./Navigation";
import Footer from "./Footer";
import HomeBanner from "./HomeBanner";
import HomeFeatures from "./HomeFeatures";
import HomeAbout from "./HomeAbout";
import HomeProducts from "./HomeProducts";
import HomePartners from "./HomePartners";
import HomePress from "./HomePress";

import logo_blue from "../assets/images/bbod_no_tagline.svg";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <HomeBanner />
        <HomeFeatures />
        <HomeAbout />
        <HomeProducts />
        <HomePartners />
        <HomePress />
        <Footer bgColor="null" fontColor="null" logo={logo_blue} />
      </div>
    );
  }
}
