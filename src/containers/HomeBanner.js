import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo_bbod from "../assets/images/bbod-big-white.svg";

export default class HomeBanner extends Component {
  render() {
    return (
      <div className="home-banner">
        <div className="row">
          <div className="col-md-5 quote text-uppercase d-flex justify-content-center align-items-center">
            <div>
              <span className="white-font roboto enter-anim-first">
                The world’s<br /> fastest<br />
              </span>
              <span className="dark-blue roboto enter-anim-second">
                Ether-based<br /> Futures<br />
                Trading<br /> Platform
              </span>
              <br />
              <Link to="/migrate-tokens">
                <button className="mt-5 migrate migrate-btn text-uppercase">
                  migrate your bbd tokens
                </button>
              </Link>
            </div>
          </div>
          <div
            className="col-md-6 d-flex justify-content-center align-items-center logo-big"
            style={{
              background: `url(${logo_bbod}) no-repeat center`,
              backgroundSize: "contain"
            }}
          >
            <div className="slogan text-center">
              Trade<br />the
              <br /> Future
            </div>
          </div>
        </div>
      </div>
    );
  }
}
