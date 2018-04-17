import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomeAbout extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="home-section-header col-md-4 dark-blue d-flex align-items-center">
            <div>Why BBOD</div>
          </div>
          <div className="home-section-more-about col-md-7 d-flex align-items-center red-base justify-content-end">
            <Link to="/about">
              <div>Read more ></div>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col col-md-4 quote-about d-flex justify-content-center align-items-center">
            <div className="m-auto why-bbod">
              <span className="light-blue">
                Because BBOD{"'"}s Trading Platform handles <br />
              </span>
              <span className="dark-blue">
                1,25 million messages/sec <br /> and your funds never leave your
                crypto-wallet. <br />
              </span>
            </div>
          </div>

          <div className="col col-md-8 quote-about-desc d-flex justify-content-center align-items-center dark-blue">
            The Blockchain Board of Derivatives (BBOD) is a cryptocurrency
            derivatives Trading Platform managed by international community.
            Research and Marketing teams are located in diverse locations:
            Seoul, New Delhi, Cambridge, Valencia, Lagos, Jakarta. BBOD
            Community has made it its mission to demystify the world of
            derivatives for the benefit of everyone who uses cryptocurrencies.
          </div>
        </div>
      </div>
    );
  }
}
