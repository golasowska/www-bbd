import React, { Component } from "react";

import Navigation from "../containers/Navigation";
import Footer from "../containers//Footer";

import logo_white from "../assets/images/bbod_white.svg";

export default class MigrateTokens extends Component {
  render() {
    return (
      <div>
        <Navigation />

        <div className="row">
          <div className="home-section-header col-md-4 dark-blue d-flex align-items-center">
            <div>Migrate your BBD tokens</div>
          </div>
        </div>

        <div className="row">
          <div className="col col-md-11 feature-desc d-flex align-items-center pl-5 pt-5 offset-md-1">
            <div>
              <span className="light-blue">
                To migrate your BBD tokens<br />
              </span>
              <span className="dark-blue">into the new contract version</span>
            </div>
          </div>
        </div>

        <Footer bgColor="#00468e" fontColor="#fff" logo={logo_white} />
      </div>
    );
  }
}
