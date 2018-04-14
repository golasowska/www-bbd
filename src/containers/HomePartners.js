import React, { Component } from "react";

import kck from "../assets/images/partners/kck_logo.png";
import qt from "../assets/images/partners/quant_technology_logo.png";

export default class HomePartners extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="home-section-header col-md-4 dark-blue d-flex align-items-center">
            <div>Partners</div>
          </div>
          <div
            className="col-md-8 partners-pink"
            style={{ background: "rgba(255, 96, 97, 0.5)" }}
          />
        </div>
        <div className="row">
          <div className="col col-md-4 partners-white" />
          <div className="col col-md-7 partners-logos d-flex flex-wrap justify-content-center align-items-center">
            <div className="pt-2 pb-5 pr-3 pl-3 partner-logo">
              <a href="http://kcik.ug.edu.pl/" target="_blank">
                <img src={kck} height="70" alt="logo_kck" />
              </a>
            </div>
            <div className="pt-2 pb-5 pr-3 pl-3 partner-logo">
              <a href="http://www.quant-technology.com/" target="_blank">
                <img src={qt} height="70" alt="logo_qt" />
              </a>
            </div>
          </div>
          <div
            className="col-md-1 partners-pink"
            style={{ background: "rgba(255, 96, 97, 0.5)" }}
          />
        </div>
      </div>
    );
  }
}
