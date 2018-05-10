import React, { Component } from "react";

import Navigation from "../containers/Navigation";
import Footer from "../containers//Footer";

import logo_white from "../assets/images/bbod_white.svg";

import qg1 from "../assets/images/quick-guide/qg-1.png";
import qg2 from "../assets/images/quick-guide/qg-2.png";
import qg3 from "../assets/images/quick-guide/qg-3.png";
import qg4 from "../assets/images/quick-guide/qg-4.png";

export default class QuickGuide extends Component {
  render() {
    return (
      <div>
        <Navigation />

        <div className="row mt-5">
          <div className="col text-center">
            <img src={qg1} className="img-fluid" alt="quick-guide" />
          </div>
        </div>

        <div className="row">
          <div className="col text-center">
            <img src={qg2} className="img-fluid" alt="quick-guide" />
          </div>
        </div>

        <div className="row">
          <div className="col text-center">
            <img src={qg3} className="img-fluid" alt="quick-guide" />
          </div>
        </div>

        <div className="row">
          <div className="col text-center">
            <img src={qg4} className="img-fluid" alt="quick-guide" />
          </div>
        </div>

        <Footer bgColor="#224394" fontColor="#fafafa" logo={logo_white} />
      </div>
    );
  }
}
