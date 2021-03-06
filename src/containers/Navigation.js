import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/bbod_white.svg";

export default class Navigation extends Component {
  render() {
    return (
      <div className=" pr-0 pl-0 container">
        <nav className="navbar navbar-expand-lg navbar-dark navbar-home ml-0 mr-0">
          <Link to="/" className="navbar-brand navbar-bbod">
            <img src={logo} width="199.947" height="90.001" alt="bbod" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Welcome<span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/features" className="nav-link">
                  Features<span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link">
                  Products<span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About us<span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/news" className="nav-link">
                  News<span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact<span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/newsletter" className="nav-link">
                  Newsletter<span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href="https://forum.bbod.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  Forum<span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
