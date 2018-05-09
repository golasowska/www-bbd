import React, { Component } from "react";

import press1 from "../assets/images/press/Independent.png";
import press2 from "../assets/images/press/finextra.png";
import press3 from "../assets/images/press/HW.png";

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
                href="https://www.independent.co.uk/life-style/gadgets-and-tech/news/what-is-ethereum-bitcoin-rival-most-valuable-cryptocurrency-a8325856.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={press1} height="30" alt="logo" />
              </a>
            </div>
            <div className="partner-logo">
              <a
                href="https://www.finextra.com/pressarticle/73010/bbod-to-launch-ethereum-derivatives-and-spot-exchange-in-partnership-with-gmex"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={press2} height="30" alt="logo" />
              </a>
            </div>
            <div className="partner-logo">
              <a
                href="https://www.hedgeweek.com/2018/03/14/262159/bbod-launch-ethereum-derivatives-and-spot-exchange-partnership-gmex-technologies"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={press3} height="40" alt="logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
