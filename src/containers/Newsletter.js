import React, { Component } from "react";

import Navigation from "./Navigation";
import Footer from "./Footer";
import FormNewsletter from "./FormNewsletter";

import logo_white from "../assets/images/bbod_basic_white.svg";
import logo_bbod from "../assets/images/bbod-big.svg";

export default class Newsletter extends Component {
  render() {
    return (
      <div>
        <Navigation />

        <div className="row">
          <div className="home-section-header col-md-4 dark-blue d-flex align-items-center">
            <div>Newsletter</div>
          </div>
        </div>

        <div className="row">
          <div className="col col-md-4 feature-desc d-flex align-items-center pt-5 offset-md-1">
            <div>
              <span className="light-blue">
                Subscribe to our<br />
              </span>
              <span className="dark-blue">newsletter</span>
            </div>
          </div>
          <div
            className="col col-md-7 newsletter-logo"
            style={{
              background: `url(${logo_bbod}) no-repeat center`,
              backgroundSize: "contain"
            }}
          />
        </div>

        <div className="row">
          <div className="col-col-md-4 feature-desc d-flex align-items-center pl-3 pt-5 offset-md-1">
            <FormNewsletter history={this.props.history} />
          </div>
        </div>

        <Footer bgColor="#224394" fontColor="#fafafa" logo={logo_white} />
      </div>
    );
  }
}
