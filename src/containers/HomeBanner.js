import React, { Component } from "react";

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
                Exchange
              </span>
              <br />
              <span className="mt-5 migrate text-uppercase">
                migrate your bbd tokens
              </span>
            </div>
          </div>
          <div
            className="div2 col col-md-7 d-flex justify-content-center align-items-center logo-big"
            style={{
              background: `url(${logo_bbod}) no-repeat center`,
              backgroundSize: "contain"
            }}
          />
        </div>
      </div>
    );
  }
}
