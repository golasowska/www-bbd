import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo_blue from "../assets/images/bbod_no_tagline.svg";

export default class Footer extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Link to="/newsletter" className="col-5 btn-footer">
            Newsletter >
          </Link>

          <div className="col-6 btn-footer">Trading ></div>
        </div>

        <div className="row footer-text">
          <div className="col-5">
            <div className="text-center">
              <img src={logo_blue} width="199.947" height="90.001" alt="bbod" />
            </div>
            <div className="text-center">
              <p>BLOCKACHAIN BOARD OF DERIVATIVES</p>
            </div>
          </div>

          <div className="col-3">
            <div className="text-left footer-text-header">
              <p>Resources</p>
            </div>
            <div className="text-left">
              <p>Quick Guide</p>
            </div>
            <div className="text-left">
              <Link to="/products">
                <p>Products</p>
              </Link>
            </div>
            <div className="text-left">
              <p>API Documentations</p>
            </div>
            <div className="text-left">
              <p>Technical Reference</p>
            </div>
          </div>

          <div className="col-3">
            <div className="text-left footer-text-header">
              <p>About & Contact</p>
            </div>
            <div className="text-left">
              <Link to="/features">
                <p>Features</p>
              </Link>
            </div>
            <div className="text-left">
              <Link to="/about">
                <p>About BBOD</p>
              </Link>
            </div>
            <div className="text-left">
              <p>News</p>
            </div>
            <div className="text-left">
              <Link to="/contact">
                <p>Contact Us</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="row footer-media">
          <div className="col-5">
            <p>
              Copyright © 2018 Digital Securities Exchange Limited. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
