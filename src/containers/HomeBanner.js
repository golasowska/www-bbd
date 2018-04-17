import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo_bbod from "../assets/images/bbod-big.svg";

export default class HomeBanner extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col col-md-4 quote d-flex justify-content-center align-items-center">
            <div>
              <span className="light-blue">
                The world’s<br /> fastest<br />
              </span>
              <span className="dark-blue">
                Ether-based<br /> Futures<br />
                Trading<br /> Platform
              </span>
              <br />
              <Link to="/migrate-tokens">
                <span className="mt-5 migrate migrate-btn text-uppercase">
                  migrate your bbd tokens
                </span>
              </Link>
            </div>
          </div>
          <div
            className="col col-md-7 d-flex justify-content-center align-items-center logo-big"
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
