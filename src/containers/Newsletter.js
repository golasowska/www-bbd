import React, { Component } from "react";

import Navigation from "./Navigation";
import Footer from "./Footer";
import FormNewsletter from "./FormNewsletter";

import logo_white from "../assets/images/bbod_white.svg";

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
          <div className="col col-md-4 feature-desc d-flex align-items-center pl-5 pt-5 offset-md-1">
            <div>
              <span className="light-blue">
                Subscribe to our<br />
              </span>
              <span className="dark-blue">newsletter</span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-col-md-4 feature-desc d-flex align-items-center pl-5 pt-5 offset-md-1">
            <FormNewsletter history={this.props.history} />
          </div>
        </div>

        <Footer bgColor="#00468e" fontColor="#fff" logo={logo_white} />
      </div>
    );
  }
}
