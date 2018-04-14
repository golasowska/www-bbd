import React, { Component } from "react";

import press1 from "../assets/images/press/press-1.svg";
import press2 from "../assets/images/press/press-2.svg";
import press3 from "../assets/images/press/press-3.svg";
import press4 from "../assets/images/press/press-4.svg";

export default class HomePress extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="home-section-header col-md-4 dark-blue d-flex align-items-center">
            <div className="light-blue">In the press</div>
          </div>
        </div>
        <div className="row">
          <div className="col col-md-4 partners-white" />
          <div className="col col-md-7 d-flex flex-wrap justify-content-center align-items-center">
            <div className="pt-2 pb-5 pr-3 pl-3 partner-logo">
              <a href="http://kcik.ug.edu.pl/" target="_blank">
                <img src={press1} height="70" alt="logo" />
              </a>
            </div>
            <div className="pt-2 pb-5 pr-3 pl-3 partner-logo">
              <a href="http://www.quant-technology.com/" target="_blank">
                <img src={press2} height="70" alt="logo_qt" />
              </a>
            </div>
            <div className="pt-2 pb-5 pr-3 pl-3 partner-logo">
              <a href="http://www.quant-technology.com/" target="_blank">
                <img src={press3} height="70" alt="logo_qt" />
              </a>
            </div>
            <div className="pt-2 pb-5 pr-3 pl-3 partner-logo">
              <a href="http://www.quant-technology.com/" target="_blank">
                <img src={press4} height="70" alt="logo_qt" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
