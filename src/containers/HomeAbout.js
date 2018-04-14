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
            <div>
              <span className="light-blue">
                We are all in this<br />together,<br />
              </span>
              <span className="dark-blue">
                everybody does<br /> their part
              </span>
            </div>
          </div>
          <div className="col col-md-8 quote-about-desc d-flex justify-content-center align-items-center dark-blue">
            The Blockchain Board of Derivatives (BBOD) is a cryptocurrency
            derivatives exchange with marketing and research offices in
            Cambridge, UK. BBOD’s cryptocurrency derivatives exchange has been
            created in partnership with GMEX. BBOD has made it its mission to
            demistify the world of derivatives for the benefit of everyone who
            uses cryptocurrencies.
          </div>
        </div>
      </div>
    );
  }
}
