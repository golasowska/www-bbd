import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo_bbod from "../assets/images/bbod-big-white.svg";
import logo_bbod0 from "../assets/images/bbod-big-white0.svg";

export default class HomeBanner extends Component {
  render() {
    return (
      <div className="home-banner">
        <div
          className="col-md-6 logo-big-1"
          style={{
            background: `url(${logo_bbod0}) no-repeat center`,
            backgroundSize: "contain"
          }}
        />
        <div
          className="col-md-6 d-flex justify-content-center align-items-center logo-big"
          style={{
            background: `url(${logo_bbod}) no-repeat center`,
            backgroundSize: "contain"
          }}
        />
        <div className="row">
          <div className="slogan text-center col-md-12">Trade the Future</div>
          <div className="col-md-12 quote d-flex justify-content-center align-items-center text-left">
            <div>
              <span className="white-font enter-anim-first">
                The world’s fastest<br />
              </span>
              <span className="dark-blue enter-anim-second">
                Ether-based<br /> Futures Trading<br /> Platform
              </span>
              <br />
              <Link to="/migrate-tokens">
                <button className="mt-5 migrate migrate-btn text-uppercase">
                  migrate your bbd tokens
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
