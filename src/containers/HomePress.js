import React, { Component } from "react";

import press1 from "../assets/images/press/finextra.png";
import press2 from "../assets/images/press/marketcoinnews.png";
import press3 from "../assets/images/press/radarzero.png";
import press4 from "../assets/images/press/Independent.png";

export default class HomePress extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="home-section-header col dark-blue d-flex align-items-center">
            <div className="dark-blue">In the press</div>
          </div>
        </div>
        <div className="row">
          <div className="col col-md-4 partners-white" />
          <div className="col col-md-7 d-flex flex-wrap justify-content-around align-items-center">
            <div className="partner-logo">
              <a
                href="https://www.independent.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={press4} height="30" alt="logo" />
              </a>
            </div>
            <div className="partner-logo">
              <a
                href="https://www.finextra.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={press1} height="30" alt="logo" />
              </a>
            </div>
            <div className="partner-logo">
              <a
                href="http://marketcoinnews.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={press2} height="40" alt="logo_qt" />
              </a>
            </div>
            <div className="partner-logo">
              <a
                href="https://radarzero.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={press3} height="40" alt="logo_qt" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
