import React, { Component } from "react";
import { connect } from "react-redux";

import Navigation from "./Navigation";
import Footer from "./Footer";

import Feature from "./Feature";

import logo_white from "../assets/images/bbod_basic_white.svg";

class Features extends Component {
  displayFeatures = () => {
    return this.props.features.map(feature => {
      return <Feature key={feature.name} feature={feature} />;
    });
  };
  render() {
    return (
      <div>
        <Navigation />

        <div className="row">
          <div className="home-section-header col-md-4 dark-blue d-flex align-items-center">
            <div>Features</div>
          </div>
        </div>

        <div className="row">
          <div className="col col-md-11 feature-desc d-flex align-items-center pl-5 pt-5 offset-md-1">
            <div>
              <span className="light-blue">
                The most advanced trading platform<br />
              </span>
              <span className="dark-blue">in the entire crypto space.</span>
            </div>
          </div>
        </div>

        <div className="row text-center">{this.displayFeatures()}</div>

        <Footer bgColor="#224394" fontColor="#fff" logo={logo_white} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    features: state.features
  };
}

export default connect(mapStateToProps)(Features);
