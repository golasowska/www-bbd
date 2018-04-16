import React, { Component } from "react";

import Navigation from "./Navigation";
import Footer from "./Footer";
import HomeBanner from "./HomeBanner";
import HomeFeatures from "./HomeFeatures";
import HomeAbout from "./HomeAbout";
import HomeProducts from "./HomeProducts";
import HomePartners from "./HomePartners";
import HomePress from "./HomePress";

// import swal from "sweetalert";

import logo_blue from "../assets/images/bbod_no_tagline.svg";

export default class Home extends Component {
  // componentDidMount = () => {
  //   setTimeout(
  //     () =>
  //       swal({
  //         text: "Join for real-time bitcoin news and price updates.",
  //         className: "",
  //         icon: logo_blue,
  //         buttons: [true, "Do it!"]
  //       }),
  //     500
  //   );
  // };

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
