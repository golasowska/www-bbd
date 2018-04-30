import React, { Component } from "react";

import Navigation from "./Navigation";
import Footer from "./Footer";
import FormContact from "./FormContact";
import GoogleMap from "./GoogleMap";

import logo_white from "../assets/images/bbod_basic_white.svg";
import logo_bbod from "../assets/images/bbod-big.svg";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Navigation />

        <div className="row">
          <div className="home-section-header col-md-4 dark-blue d-flex align-items-center">
            <div>Community</div>
          </div>
        </div>
        <div className="row">
          <div className="col col-md-4 feature-desc d-flex align-items-center pl-5 pt-5 offset-md-1">
            <div>
              <span className="light-blue">Where</span>
            </div>
          </div>
        </div>

        <GoogleMap />

        <div className="row">
          <div className="home-section-header col-md-4 dark-blue d-flex align-items-center">
            <div>Get info</div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col col-sm-4 d-flex align-items-center pt-5 offset-md-1">
            <FormContact history={this.props.history} />
          </div>
          <div
            className="col col-sm-6 logo-big-contact"
            style={{
              background: `url(${logo_bbod}) no-repeat center`,
              backgroundSize: "contain"
            }}
          />
        </div>

        <Footer bgColor="#224394" fontColor="#fafafa" logo={logo_white} />
      </div>
    );
  }
}
