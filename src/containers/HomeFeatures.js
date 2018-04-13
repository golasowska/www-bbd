import React, { Component } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import HomeFeature from "./HomeFeature";

class HomeFeatures extends Component {
  displayHomeFeatures = () => {
    return this.props.homeFeatures.map(homeFeature => {
      return <HomeFeature key={homeFeature.name} homeFeature={homeFeature} />;
    });
  };
  render() {
    return (
      <div>
        <div className="row">
          <div className="home-section-header col-md-4 white-font d-flex align-items-center">
            <div>Features</div>
          </div>
          <div className="home-section-more col-md-7 d-flex align-items-center red-base justify-content-end">
            <Link to="/features">
              <div>Read more ></div>
            </Link>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-md-1 fake-hight" />
          {this.displayHomeFeatures()}
          <div className="col-md-1 fake-hight" />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    homeFeatures: state.homeFeatures
  };
}

export default connect(mapStateToProps)(HomeFeatures);
